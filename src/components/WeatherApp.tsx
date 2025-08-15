import { useCallback, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { addHistory, selectHistory } from '../redux/weatherSlice'
import { useFetch } from '../hooks/useFetch'

type WeatherData = {
  main: { temp: number }
  weather: { description: string }[]
  name: string
}

const API_BASE = 'https://api.openweathermap.org/data/2.5/weather'

export default function WeatherApp() {
  const dispatch = useAppDispatch()
  const history = useAppSelector(selectHistory)
  const [city, setCity] = useState('')
  const [url, setUrl] = useState<string | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null) // updated type

  const fetchWeather = useCallback(
    (c: string) => {
      const key = import.meta.env.VITE_OPENWEATHER_KEY
      if (!key) {
        alert('Missing VITE_OPENWEATHER_KEY in .env')
        return
      }
      const q = `${API_BASE}?q=${encodeURIComponent(c)}&appid=${key}&units=metric`
      setUrl(q)
      dispatch(addHistory(c))
      setErrorMsg(null) // reset error message before fetching
    },
    [dispatch]
  )

  const { data, error, loading } = useFetch<WeatherData>(url)

  // Update errorMsg if fetch hook returns error
  if (error && !errorMsg) {
    setErrorMsg('Could not fetch weather.')
  }

  const pretty = useMemo(() => {
    if (!data) return null
    const temp = Math.round(data.main.temp)
    const desc = data.weather[0]?.description ?? ''
    return { temp, desc, name: data.name }
  }, [data])

  return (
    <section className="weather-section container">
      <h2>🌤️ Weather</h2>
      <div className="weather-form">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button className="btn" onClick={() => city && fetchWeather(city)}>
          Get Weather
        </button>
      </div>

      <div className="weather-history">
        {history.map((h, i) => (
          <button key={i} className="chip" onClick={() => fetchWeather(h)}>
            {h}
          </button>
        ))}
      </div>

      <div className="weather-result">
        {loading && <p>Loading...</p>}
        {errorMsg && <p className="error">{errorMsg}</p>}
        {pretty && (
          <p>
            🌡️ {pretty.temp}°C — {pretty.desc} in {pretty.name}
          </p>
        )}
      </div>
    </section>
  )
}
