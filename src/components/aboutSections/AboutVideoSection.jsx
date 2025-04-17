function AboutVideoSection() {
  return (
    <section className="w-full my-16">
      <div className="w-4/5 mx-auto">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover aspect-video rounded-2xl"
        >
          <source
            src="https://cdn.pixabay.com/video/2025/04/09/270940_large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default AboutVideoSection;
