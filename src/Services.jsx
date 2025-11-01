export default function Services(props) {
    return (
        <div className=" flex justify-center items-center">



            <section className="card flex flex-col items-center gap-2 m-2 p-4">
                <h3 className="mt-6 text-2xl sm:text-3xl md:text-4xl text-center font-semibold">
                    {props.title}
                </h3>
                <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center max-w-[90%] sm:max-w-[80%]">
                    {props.des}
                </p>
            </section>
        </div>
    );
}
