import "animate.css";

const Solutions = () => {
  return (
    <div className="bg-black text-white pt-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-center text-[#5D5DFF]">
          OUR SOLUTION
        </h2>
        <h1 className="text-5xl font-bold mb-6 text-center">
          End-to-End, Customizable Setup
        </h1>
        <p className="text-center text-gray-400">
          Testimonial offers an agency-dedicated plan to help grow your
          business. You will have the best <br /> platform you need to handle
          testimonial collection, easy to use for you, your clients, and theirs!
        </p>

        <section id="solutions" className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Solution 1 */}
            <div className="flex flex-col lg:flex-row items-center mb-10 bg-gradient-to-br from-[#5D5DFF]/10 via-[#1E1E2F]/10 to-black p-6 rounded-lg animate__animated animate__fadeIn animate__delay-0.5s animate__slow">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
                <h3 className="text-xl md:text-3xl font-bold text-[#5D5DFF] mb-4">
                  Quick to setup
                </h3>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Get a dedicated landing page in less than two minutes.
                </h2>
                <p className="text-lg text-white mb-6">
                  Create a Testimonial space for each client. It will generate a
                  dedicated landing page with a unique link for collecting
                  testimonials. Share the link easily via email, social media,
                  or even SMS. Setup can be done in two minutes.
                </p>
              </div>
              <div className="lg:w-1/2 animate__animated animate__fadeInRight animate__delay-1s animate__slow border-2 border-white rounded-lg">
                <img
                  src="/assets/img-1.jpg"
                  alt="Control spend"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>

            {/* Solution 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center mb-10 bg-gradient-to-br from-[#5D5DFF]/10 via-[#1E1E2F]/10 to-black p-6 rounded-lg animate__animated animate__fadeIn animate__delay-1s animate__slow">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pl-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5D5DFF] mb-4">
                  Easy to manage
                </h3>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Manage testimonials all in one place
                </h2>
                <p className="text-lg text-white mb-6">
                  Testimonial offers a simple dashboard to manage testimonials
                  for each client in each space. Testimonials that got submitted
                  will directly go into the space associated with that unique
                  link. Each client has their own space, and will manage their
                  own testimonial content.
                </p>
              </div>
              <div className="lg:w-1/2 animate__animated animate__fadeInLeft animate__delay-1.5s animate__slow border-2 border-white rounded-lg">
                <img
                  src="/assets/img-2.jpg"
                  alt="Easy expenses"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>

            {/* Solution 3 */}
            <div className="flex flex-col lg:flex-row items-center mb-10 bg-gradient-to-br from-[#5D5DFF]/10 via-[#1E1E2F]/10 to-black p-6 rounded-lg animate__animated animate__fadeIn animate__delay-2s animate__slow">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5D5DFF] mb-4">
                  No-code integration
                </h3>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Integrate the Wall of Love with no code
                </h2>
                <p className="text-lg text-white mb-6">
                  With Testimonial, you can copy and paste our 3-line HTML code
                  to add the Wall Of Love to your client's website in under a
                  minute. No coding knowledge required!
                </p>
                <a
                  href="#explore-accounts"
                  className="inline-flex items-center text-white-600 font-bold underline font-medium"
                >
                  Explore Brex business accounts →
                </a>
              </div>
              <div className="lg:w-1/2 animate__animated animate__fadeInRight animate__delay-2.5s animate__slow border-2 border-white rounded-lg">
                <img
                  src="/assets/img-3.jpg"
                  alt="Business accounts"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>

            {/* Solution 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center mb-10 bg-gradient-to-br from-[#5D5DFF]/10 via-[#1E1E2F]/10 to-black p-6 rounded-lg animate__animated animate__fadeIn animate__delay-3s animate__slow">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pl-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5D5DFF] mb-4">
                  Invite clients
                </h3>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Engage your clients fast
                </h2>
                <p className="text-lg text-white mb-6">
                  Share the space access with your clients. Let your clients
                  review testimonials before they are published. It saves lots
                  of back-and-forth conversations and will make sure both you
                  and your clients are always on the same page!
                </p>
              </div>
              <div className="lg:w-1/2 animate__animated animate__fadeInLeft animate__delay-3.5s animate__slow border-2 border-white rounded-lg">
                <img
                  src="/assets/img-4.jpg"
                  alt="Bill pay"
                  className="rounded-lg shadow-xl w-full h-[600px]"
                />
              </div>
            </div>

            {/* Solution 5 */}
            <div className="flex flex-col lg:flex-row items-center animate__animated animate__fadeIn animate__delay-4s animate__slow bg-gradient-to-br from-[#5D5DFF]/10 via-[#1E1E2F]/10 to-black p-6 rounded-lg">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5D5DFF] mb-4">
                  Track the metrics
                </h3>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Understand how video testimonials are performing
                </h2>
                <p className="text-lg text-white mb-6">
                  Track the metrics from all embedded videos, helping you and
                  your client understand the performance of all video
                  testimonials at a glance. Based on the result, you can drag
                  and drop the highest performing videos to the top of the Wall
                  of Love.
                </p>
              </div>
              <div className="lg:w-1/2 animate__animated animate__fadeInRight animate__delay-4.5s animate__slow border-2 border-white rounded-lg">
                <img
                  src="/assets/img-5.jpg"
                  alt="Accounting AI"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Solutions;
