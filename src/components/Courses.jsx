const Courses = ({ courses }) => {
  let content = [];
  courses.forEach((course, i) => {
    content.push(
      <div key={course.id}>
        <Header key={`${course.id}-header`} name={course.name} />
        <Content key={`${course.id}-content`} course={course} />
        <Total key={`${course.id}-total`} course={course} />
      </div>,
    );
  });
  return content;
};

const Header = ({ name }) => {
  return (
    <>
      <h2>{name}</h2>
    </>
  );
};

const Content = ({ course }) => {
  return (
    <>
      <Part course={course} />
    </>
  );
};

const Total = ({ course }) => {
  const total = course.parts.reduce((s, p) => {
    return s + p.exercises;
  }, 0);
  return (
    <>
      <h4>Number of exercises: {total}</h4>
    </>
  );
};

const Part = ({ course }) => {
  let content = [];
  course.parts.forEach((part) => {
    content.push(
      <p key={part.name}>
        {part.name} {part.exercises}
      </p>,
    );
  });
  return <>{content}</>;
};

export default Courses;
