<section className="p-6 bg-gray-100 animate__animated animate__backInDown">
<div className="container mx-auto px-4">
  <div className="text-left mb-8 animate__animated animate__bounce">
    <div className="flex flex-wrap justify-between items-center mb-6">
      <div className="relative inline-block">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 relative">
          Scholarships
          <Image
            src={oppo}
            alt="Header Icon"
            className="absolute top-0 right-[-50px] md:right-[-92px] w-7 md:w-9 h-7 md:h-9"
          />
        </h1>
      </div>
      <Button
        variant="contained"
        color="primary"
        className="rounded-md shadow-lg text-xs md:text-sm px-4 py-2"
      >
        Explore More
      </Button>
    </div>
  </div>

  {/* Swiper Component */}
  <Swiper
    modules={[Autoplay, Pagination]}
    spaceBetween={15}
    slidesPerView={1.5}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    pagination={{ el: ".custom-pagination", clickable: true }}
    navigation
    loop
    breakpoints={{
      480: { slidesPerView: 1.5 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 2.5 },
      1024: { slidesPerView: 3.5 },
    }}
    className="relative"
  >
    {scholarships.map((scholarship) => (
      <SwiperSlide key={scholarship.id}>
        <div className="p-1">
          {/* <div className=""> */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden animate__animated animate__zoomIn">
            <a href={scholarship.link} className="block">
              <Image
                src={scholarship.image}
                alt={scholarship.title}
                className="w-full h-36 md:h-44 object-cover"
              />
            </a>
            <div className="p-3 md:p-3.5">
              <a
                href={scholarship.link}
                className="text-sm md:text-base font-semibold text-gray-900 block mb-1 md:mb-1.5"
              >
                {scholarship.title}
              </a>
              <span className="text-xs text-gray-600">
                {scholarship.points}
              </span>
              <p className="text-xs text-gray-700 mt-1">
                {scholarship.description}
              </p>
              <div className="flex gap-2 mt-2">
                {scholarship.features?.map((feature, index) => (
                  <img
                    key={index}
                    src={feature.img}
                    title={feature.title}
                    className="w-4 h-4 md:w-5 md:h-5"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  <div className="custom-pagination mt-4 flex justify-center"></div>

  <div className="mt-5 sm:mt-7 animate__animated animate__fadeInUp">
    {/* <a
      href=""
      className="inline-block bg-blue-600 text-white text-xs sm:text-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Explore More
    </a> */}
    <Button
      variant="contained"
      color="primary"
      className="inline-block rounded-md shadow-md text-xs sm:text-sm px-3 sm:px-6 py-1.5 sm:py-2"
    >
      Explore More
    </Button>
  </div>

  {/* Custom Pagination */}
</div>
</section>
