import Counter from "../components/Counter";
import "../styles/project1.css";

export default function Project1() {
  return (
    <div className="container page project1">
      <h1 className="project1-title">Compound Component Pattern</h1>

      {/* First Counter */}
      <Counter className="project-counter">
        <Counter.Label>My super flexible counter</Counter.Label>
        <Counter.Decrease icon="-" />
        <Counter.Increase icon="+" />
        <Counter.Count />
      </Counter>

      {/* Second Counter */}
      <div style={{ marginTop: 24 }}>
        <Counter className="project-counter variant-arrows">
          <Counter.Decrease icon="◀️" />
          <Counter.Count />
          <Counter.Increase icon="▶️" />
        </Counter>
      </div>
    </div>
  );
}
