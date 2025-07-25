import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Slider from 'react-slick';
import { fadeInUp, staggerContainer } from '../utils/animations';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';

interface BlogProps {
  darkMode: boolean;
}

const blogs = [
  {
    title: "Green Chemistry in Real Life",
    snippet: "Explore how green chemistry principles can solve everyday problems sustainably.",
    img: blog1,
    link: "#"
  },
  {
    title: "Soil Health & Microbes",
    snippet: "A dive into biofertilizers and their impact on Indian farming systems.",
    img:blog2,
    link: "#"
  },
  {
    title: "Safe Labs: What Schools Must Know",
    snippet: "5 key lab safety protocols for educational institutions.",
    img: blog3,
    link: "#"
  }
];

const BlogPage: React.FC<BlogProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section id="blog" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-10"
        >
          <motion.h1 variants={fadeInUp} className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Blog & Articles
          </motion.h1>
          <motion.p variants={fadeInUp} className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Sharing chemistry insights, safety protocols, and sustainability tips.
          </motion.p>
        </motion.div>

        <Slider {...settings}>
          {blogs.map((blog, index) => (
            <motion.div key={index} variants={fadeInUp} className="px-4">
              <div className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
              }`}>
                <img src={blog.img} alt={blog.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-sm mb-4">{blog.snippet}</p>
                  <a href={blog.link} className="text-emerald-500 font-semibold hover:underline">Read More →</a>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BlogPage;
