// Notice that we use the title and children props, however we don't use any styling props
// if we don't use the ...props. When we set Section id=... it doesn't automatically
// sets all the html code with this id, we need to manually put it. So what we did is
// put all the styling under props (id in this example) and manually set it.
// Notice that ...props just puts under props all the remaning data of this component (in this
// example it's only the id)
export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
