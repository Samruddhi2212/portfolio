export default function SectionTitle({ index, title }) {
  return (
    <h2 className="section-title">
      <span className="number">{index}.</span>
      {title}
      <span className="line" />
    </h2>
  )
}
