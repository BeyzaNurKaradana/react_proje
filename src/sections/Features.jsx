import Card from "../components/Card";

const Features = () => {
  return (
    <section className="pt-4">
      <div className="container px-lg-5">
        <div className="row gx-lg-5">
          <Card title= {"Performance"} text= {"React is a framework that works quickly and efficiently. This is especially important for user interaction intensive applications."} iconName={"lightning-fill"} />
          <Card title= {"Code Repeat"} text= {"React has a structure that reduces code repetition. This allows developers to code faster and more efficiently."} iconName={"arrow-repeat"} />
          <Card title= {"Universal applications"} text= {"React is available for both web and mobile applications. This allows developers to develop applications on both platforms using a single code base."} iconName={"globe"} />
          <Card title= {"Component-Based Architecture"} text= {"React has a component-based architecture. This makes applications more scalable and manageable."} iconName={"collection"} />
          <Card title= {"Huge Community and Ecosystem"} text= {"React has a huge community and ecosystem. This makes it easier for developers to find help and support."} iconName={"person-add"} />
          <Card title= {"Flexibility"} text= {"React is a flexible library. This allows developers to tailor their applications to suit their needs."} iconName={"signpost-2"} />

          


          
        </div>
      </div>
    </section>
  );
};

export default Features;
