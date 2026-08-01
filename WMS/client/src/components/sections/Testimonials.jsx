import { Quote, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { testimonials } from "../../data/testimonials";
import FAQSection from "./FAQSection";

const Testimonials = () => {
  return (
    <section className="py-14 bg-gray-50">

      <Container>

        <SectionHeading
          eyebrow="Testimonials"
          title="Our Happy Clients"
          description="Our commitment to quality craftsmanship, precision welding and timely delivery has earned the trust of homeowners and businesses alike."
          centered
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mt-10 testimonialSwiper"
          style={{ paddingBottom: "35px" }}>
          {testimonials.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{
                height: "auto",
                display: "flex",
              }}
            >
              <div
                className="
        group
        flex
        flex-col
        w-full
        rounded-2xl
        border
        border-slate-700
        bg-slate-900
        p-4
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-orange-500
        hover:shadow-[0_15px_40px_rgba(249,115,22,0.15)]
      "
              >
                {/* Quote */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                  <Quote size={28} />
                </div>

                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className="fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="flex-1 text-[15px] leading-7 text-slate-300">
                  "{item.review}"
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-slate-700" />

                {/* User */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-full border-2 border-orange-500 object-cover"
                  />

                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {item.name}
                    </h4>

                    <p className="text-sm text-slate-400">
                      {item.role}
                    </p>

                    <p className="text-sm font-medium text-orange-500">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <FAQSection />
    </section>

  );
};

export default Testimonials;