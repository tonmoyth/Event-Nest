import Button from "../components/Header/Button/Button";

const Event = ({ event }) => {
  const { image, type, title, date, location, topics } = event;
  return (
    <div className="mt-10">
      <div className="lg:card lg:card-side lg:w-2/3 mx-auto bg-base-100 shadow-sm">
        <figure className="lg:w-1/3">
          <img className="w-full" src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <div>
            <span className="uppercase px-3 py-2 text-primary font-bold rounded-2xl">
              {type}
            </span>
          </div>

          <h2 className="card-title">{title}</h2>
          <p>Location : {location}</p>
          <p>Date : {date}</p>
          <p className="flex gap-1 items-center">
            {topics.map((topic) => (
              <span key={topic.id} className="md:px-2 font-bold">
                {topic}
              </span>
            ))}
          </p>

          <div className="card-actions justify-end">
            <Button
              onclick={()=>document.getElementById("my_modal_1").showModal()}
              level="Ticket"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
