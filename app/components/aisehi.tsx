<section className="py-12 bg-gray-100 animate__animated animate__fadeIn">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <div className="text-left mb-8 animate__animated animate__bounce">
      <div className="flex justify-between items-center mb-6">
        <div className="relative inline-block">
          <h1 className="text-3xl font-bold text-gray-800 relative ">
            Our Community Impact
            <Image
              src={oppo}
              alt="Header Icon"
              className="absolute top-0 right-[-92px] w-10 h-10"
            />
          </h1>
        </div>
        <Button
          variant="contained"
          color="primary"
          className="rounded-md shadow-lg"
        >
          Explore More
        </Button>
      </div>
    </div>

    {/* Slider Section */}
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={3.5}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      loop
      breakpoints={{
        640: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 3.5,
        },
      }}
      // className="relative pb-10"
      className="relative"
    >
      <div className="custom-pagination mt-10 flex justify-center"></div>
      {impactsData.map((impact) => (
        <SwiperSlide key={impact.id}>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden animate__animated animate__zoomIn">
            <div className="relative h-48">
              <Image
                src={impact.image}
                alt={impact.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 left-2 flex gap-2">
                {impact.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 text-white text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{impact.title}</h3>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-sm text-gray-600">
                  Impact Created by:
                </span>
                <div className="flex -space-x-2">
                  {impact.createdBy.map((user, index) => (
                    <div
                      key={index}
                      className="relative w-8 h-8 rounded-full overflow-hidden"
                    >
                      <Image
                        src={user.image}
                        alt={user.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {impact.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-200 p-2 rounded"
                  >
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="ml-2 text-sm">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Explore More Button */}
    <div className="text-center mt-8 animate__animated animate__fadeInUp">
      <a
        href=""
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Explore More
      </a>
    </div>
  </div>
</section>;
