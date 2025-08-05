import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Angie Godfrey",
      location: "Ogden, Utah",
      rating: 5,
      text: "Lori Underwood is a highly competent colon hydro-therapist. I had my first treatment with her over 18 years ago and continue to benefit from her leading edge equipment and knowledge of colon health. She has taught me that colon health is vital for one's overall health and well being as it impacts our physical, mental and emotional well being. I have used her services regularly over the years to help maintain my colon's function and would highly recommend her to anyone and everyone. Her easygoing personality puts you at ease immediately and she has the ability to make a potentially uncomfortable situation and experience seem almost normal. I truly admire that about her. Spending time with Lori makes you feel good all over.",
      services: ["Colon Hydrotherapy", "Asyra Testing"]
    },
    {
      name: "Bree Gibbons",
      location: "Ogden, UT",
      rating: 5,
      text: "I started seeing Lori Underwood nearly 5 years ago. Lori, in my opinion, represents the future of natural medicine. I first came to see Lori at a very difficult time in my life. I was going through a lot mentally, emotionally, and physically and as a result of the unhealthy coping methods I was using at the time my body was in crisis. I came to Lori initially for the cleanse and balance effects of colon therapy that I desperately needed from years of suffering with an eating disorder. I loved the therapeutic effects it offered by calming my nervous system, stimulating my immune system and restoring a proper PH balance in my body.",
      services: ["Colon Hydrotherapy", "Asyra Testing"]
    },
    {
      name: "Jennie Porter R.D.H., B.S., N.D.",
      location: "Healthcare Professional",
      rating: 5,
      text: "Let's face it, we live in a toxic world. We breathe, eat, drink and apply to our skin toxins everyday. When toxins remain in our fluids, then get in the tissues, invade organs and impregnate into the cells, eventually you'll manifest a disease. Disease is rooted in a toxic body. When the eliminating organs; liver kidney, colon, lung, and the skin fail to eliminate toxins you're going to get sick. One of the most efficient and fastest ways to start cleaning the old, impacted, and possibly infected feces out of the colon is to get a colonic. Lori Underwood is a very experienced and excellent colon therapist to administer a colonic and assist you on your way to better health.",
      services: ["Colon Hydrotherapy"]
    },
    {
      name: "Jerry Tilley",
      location: "Client",
      rating: 5,
      text: "In 2005 I was diagnosed with Epstein Bar Virus. I was having severe bouts that lasted 4-6 weeks of fatigue and sickness. Basically during those episodes I was going to work and coming home and going straight to bed and couldn't remember one day from the next what had happened. For years I only had about a month in between episodes. After trying many treatments that didn't work and being told there was nothing else anyone could do, I was told about Inside Tract. After the first couple of treatments I started feeling better and with regular treatments I've only had one short bout of sickness and it's been three years since my treatments began. It's been a life changer.",
      services: ["Colon Hydrotherapy"]
    },
    {
      name: "Kandus R.",
      location: "Client",
      rating: 5,
      text: "I am writing this for the Inside Tract and Lori Underwood. I first started seeing Lori and had her run an Asyra test on me. The results were amazing, it picked up things I knew about and things I did not know about. I had mysterious things going on and it picked it up and gave me a name of it so that I could start working on the real problem instead of just guess work. This machine has been FDA approved and many medical doctors are seeing surprising results this new functional medicine is amazing. I then started seeing Lori for Colon Hydrotherapy work. I was shocked at what remains in our body rotting.",
      services: ["Asyra Testing", "Colon Hydrotherapy"]
    },
    {
      name: "K.T.",
      location: "Ogden, Utah",
      rating: 5,
      text: "Lori (Inside Tract) was referred to me by my masseuse when I mentioned my problem with chronic constipation. Since I started going a few months ago my health has benefited from the cleaning out of toxins and all the accumulated build up that I was not able to eliminate on my own. Also, I like that these easy and simple treatments are accomplished without putting medical drugs with their toxins/side effects into my body. I am hopeful that this will help me to be able to avoid the Colonoscopy that I seem to be headed for. Lori is very professional and knowledgeable and I find the environment at Inside Tract very comfortable and clean.",
      services: ["Colon Hydrotherapy"]
    },
    {
      name: "Nancy Porter",
      location: "Client",
      rating: 5,
      text: "I have been going to the Inside Track for over 9 years. Over the years I have spent thousands of dollars, trying to figure out why I was always so tired and never having any energy. In my family we have experienced problems with constipation, Chronic Fatigue and Ebstein Barr. After being told about Lori and her experience with Colonic's I decided to go for it. I must say at first I was a little leary, but it is such a simple procedure. It is wonderful to have quality of life, not to mention being able to enjoy my family.",
      services: ["Colon Hydrotherapy"]
    },
    {
      name: "Shirley D.",
      location: "Client",
      rating: 5,
      text: "I started coming to Lori at the Inside Tract many years ago. I have had some times that I have not seen her much and then get back to going to get feeling better. I came original because of candida this caused me to have many sensitivities. I have done many things to change this over the years and think that colon hydrotherapy is a must for this situation. In doing colon hydrotherapy many of these problems leave or at least make life more bearable in this toxic world we are living in. I now enjoy good health. The Asyra pinpointed many things I was struggling with to help bring me back into balance.",
      services: ["Colon Hydrotherapy", "Asyra Testing", "Ionic Foot Bath"]
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Our Reviews
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read what our clients have to say about their experiences with our alternative therapy services and how they've transformed their health and wellness.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-sky-600">20+</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>
          <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-emerald-600">1000+</div>
            <div className="text-gray-600">Satisfied Clients</div>
          </div>
          <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
            <div className="flex justify-center space-x-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-gray-600">5-Star Reviews</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="space-y-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Quote className="h-8 w-8 text-sky-600" />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{review.name}</h3>
                      <p className="text-gray-600">{review.location}</p>
                    </div>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-5 w-5 ${
                            star <= review.rating 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed italic">
                    "{review.text}"
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {review.services.map((service, serviceIndex) => (
                      <span 
                        key={serviceIndex}
                        className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-sky-600 to-emerald-600 rounded-2xl p-8 lg:p-12 text-center text-white mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience These Results for Yourself?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Join the hundreds of satisfied clients who have transformed their health with our professional alternative therapy services.
          </p>
          <div className="space-y-4">
            <div className="text-2xl font-bold">(801) 479-5616</div>
            <div className="text-sky-100">
              2021 East Ryan Circle, Ogden UT 84403
            </div>
            <div className="text-lg font-semibold text-emerald-200 mt-4">
              "Your Inside Tract To A Healthier You!"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;