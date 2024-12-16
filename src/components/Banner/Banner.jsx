import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "@mui/system";
import { ColoresJulioFood } from "../../Colores";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";

const ContenedorBanner = styled("section")({
  display: "flex",
  flexDirection: "column",
  borderBottom: "0.125rem solid",
  borderColor: ColoresJulioFood.hover,
  width: "100%",
  height: "400px",
  userSelect: "none",
});

const ImagenBanner = styled("img")({
  display: "flex",
});

const Banner = () => {
  return (
    <ContenedorBanner>
      <Swiper
        style={{
          "--swiper-pagination-color": ColoresJulioFood.hover,
          "--swiper-pagination-bullet-inactive-color": ColoresJulioFood.fondo,
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <ImagenBanner
            src="https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/7SDQAASLVNFJZAL4CQMIWF76RU.jpg"
            alt="Imagen banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ImagenBanner
            src="https://hips.hearstapps.com/hmg-prod/images/new-kit-kat-1525973564.jpg"
            alt="Imagen banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ImagenBanner
            src="https://d2z2mkwk6fkehh.cloudfront.net/f2me/blog/How%20to%20Buy%20Kit%20Kats%20online%20from%20japan%20and%20ship%20internationally/KitKat1.jpg"
            alt="Imagen banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ImagenBanner
            src="https://media.timeout.com/images/105265680/image.jpg"
            alt="Imagen banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ImagenBanner
            src="https://people.com/thmb/XKlXJApM-YfnDZmokle22q-LhPo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(629x499:631x501)/KIT-KAT-Blueberry-Muffin-1-7b058562758640d1ad5cf5aad55fdda7.jpg"
            alt="Imagen banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ImagenBanner
            src="https://images.squarespace-cdn.com/content/v1/5c99011c77b9037f574a56be/1613079869526-XJ55HAX5G1QW62H3NL30/KitKatScroll_Images-01.jpg"
            alt="Imagen banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ImagenBanner
            src="https://www.tastingtable.com/img/gallery/23-kit-kat-flavors-ranked/l-intro-1674501411.jpg"
            alt="Imagen banner"
          />
        </SwiperSlide>

        <SwiperSlide>
          <ImagenBanner
            src="https://soranews24.com/wp-content/uploads/sites/3/2019/04/japanese-kitkats-mint-chocolate-get-fresh-with-new-peach-mint-flavour-this-summer-japan-chocolates-top.jpg"
            alt="Imagen banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ImagenBanner src="https://munchtimeexotics.com/cdn/shop/files/KitKatPeachBag.jpg?v=1687830460&width=1946" />
        </SwiperSlide>
      </Swiper>
    </ContenedorBanner>
  );
};

export default Banner;
