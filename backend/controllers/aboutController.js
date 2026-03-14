export const getAboutData = (req, res) => {
  const isHindi = req.query.lang === 'hi';

  const aboutData = {
    status: 'success',
    data: {
      intro: {
        headline: isHindi ? 'हमारा इतिहास' : 'Our History',
        subheadline: isHindi
          ? 'RAJ MUSHROOM, RAJ AGRO FARMING TRAINING AND CONSULTANCY SERVICES PATNA का एक कंसोर्टियम है।'
          : 'RAJ MUSHROOM is a consortium of RAJ AGRO FARMING TRAINING AND CONSULTANCY SERVICES PATNA.',
        description: isHindi
          ? 'यह एक एग्री कनेक्ट है जो कृषि में जैविक इनपुट को बढ़ावा देने पर केंद्रित है। RAJ AGRO FARMING TRAINING AND CONSULTANCY SERVICES PATNA द्वारा बायोपेस्टीसाइड, बायोफर्टिलाइज़र, बायोस्टिमुलेंट और विभिन्न कृषि इनपुट का उत्पादन किया जाता है।'
          : 'An Agri Connect focused on promoting organic inputs for agriculture. A wide range of BioPesticides, BioFertilizers, BioStimulants and Agri inputs are manufactured by RAJ AGRO FARMING TRAINING AND CONSULTANCY SERVICES PATNA.',
      },
      labels: {
        foundedLabel: isHindi ? 'स्थापना वर्ष 2010' : 'Founded 2010',
        journeyTitle: isHindi ? 'वर्षों की हमारी यात्रा' : 'Our Journey Through the Years',
        philosophyLabel: isHindi ? 'दर्शन' : 'Philosophy',
        companyBasicsLabel: isHindi ? 'कंपनी परिचय' : 'Company Basics',
        exploreProducts: isHindi ? 'उत्पाद देखें' : 'Explore Products',
        ourServices: isHindi ? 'हमारी सेवाएं' : 'Our Services',
      },
      timeline: [
        {
          year: '2010',
          title: isHindi ? 'स्थापना' : 'Established',
          description: isHindi
            ? 'RAJ AGRO FARMING TRAINING AND CONSULTANCY SERVICES PATNA की स्थापना कृषि में जैविक इनपुट को बढ़ावा देने के उद्देश्य से हुई। यहाँ BioPesticides, BioFertilizers, BioStimulants और अन्य कृषि इनपुट का निर्माण किया जाता है — यह पटना में टिकाऊ कृषि आंदोलन की शुरुआत थी।'
            : 'RAJ AGRO FARMING TRAINING AND CONSULTANCY SERVICES PATNA was focused on promoting organic inputs for agriculture. A wide range of BioPesticides, BioFertilizers, BioStimulants and Agri inputs are manufactured here — marking the beginning of a sustainable agri movement in Patna.',
        },
        {
          year: '2013',
          title: isHindi ? 'तकनीक' : 'Technology',
          description: isHindi
            ? 'RAJ AGRO FARMING TRAINING AND CONSULTANCY SERVICES PATNA ने जैव-इनपुट निर्माण के लिए उन्नत कृषि प्रौद्योगिकी की शुरुआत की। वैज्ञानिक विधियाँ और गुणवत्ता प्रोटोकॉल स्थापित किए गए ताकि किसानों को लगातार प्रभावी जैविक उत्पाद मिल सकें।'
            : 'RAJ AGRO FARMING TRAINING AND CONSULTANCY SERVICES PATNA introduced advanced agri-technology for bio-input formulation. Scientific methods and quality protocols were established to ensure consistent, effective organic products for farmers.',
        },
        {
          year: '2019',
          title: isHindi ? 'निर्माण' : 'Manufacturing',
          description: isHindi
            ? 'इन-हाउस उत्पादन कार्यों का महत्वपूर्ण विस्तार हुआ। बायोपेस्टीसाइड, बायोफर्टिलाइज़र, बायोस्टिमुलेंट और अन्य कृषि इनपुट अब बड़े पैमाने पर निर्मित हो रहे थे — प्रयोगशाला से खेत तक हर चरण में गुणवत्ता नियंत्रण सुनिश्चित किया जा रहा था।'
            : 'In-house manufacturing operations expanded significantly. BioPesticides, BioFertilizers, BioStimulants and Agri Inputs were now produced at scale, ensuring quality control at every stage from lab to field.',
        },
        {
          year: '2020',
          title: isHindi ? 'विपणन' : 'Marketing',
          description: isHindi
            ? 'RAJ AGRO FARMING TRAINING AND CONSULTANCY SERVICES PATNA ने संरचित विपणन और वितरण चैनल शुरू किए। RAJ Mushroom कंसोर्टियम का गठन हुआ, जिससे बिहार और आसपास के क्षेत्रों के किसानों तक पहुंच बढ़ी।'
            : 'RAJ AGRO FARMING TRAINING AND CONSULTANCY SERVICES PATNA launched structured marketing and distribution channels. The RAJ Mushroom consortium was formed, extending reach to farmers across Bihar and neighbouring regions.',
        },
      ],
      organic: {
        title: isHindi ? 'हमारा ऑर्गेनिक दृष्टिकोण' : 'Our Organic Philosophy',
        description: isHindi
          ? 'हम निषेचन और कीट नियंत्रण की निर्धारित विधियों का पालन करते हुए जैविक कृषि के उच्चतम सिद्धांतों को बनाए रखते हैं।'
          : 'According to certain standards, especially the use of stated methods of fertilization and pest control, we uphold the highest principles of organic agriculture.',
        pillars: [
          {
            title: isHindi ? 'जैविक प्रमाणीकरण' : 'Organic Certification',
            description: isHindi
              ? 'जैविक खेती से उत्पादित वस्तुओं के उत्पादकों के लिए मान्यता प्रक्रिया, जो राष्ट्रीय और अंतर्राष्ट्रीय मानकों का अनुपालन सुनिश्चित करती है।'
              : 'Accreditation process for producers of organically-farmed products, ensuring compliance with national and international standards.',
          },
          {
            title: isHindi ? 'जैविक बागवानी' : 'Organic Horticulture',
            description: isHindi
              ? 'जैविक कृषि के आवश्यक सिद्धांतों का पालन करके फलों, सब्जियों, फूलों या सजावटी पौधों को उगाने की विज्ञान और कला।'
              : 'The science and art of growing fruits, vegetables, flowers, or ornamental plants by following the essential principles of organic agriculture.',
          },
          {
            title: isHindi ? 'जैविक खाद्य' : 'Organic Food',
            description: isHindi
              ? 'जैविक खेती विधियों द्वारा उत्पादित और जैविक मानकों के अनुसार प्रमाणित खाद्य — हानिकारक रसायनों से मुक्त।'
              : 'Food produced from organic farming methods and often certified organic according to organic farming standards — free from harmful chemicals.',
          },
          {
            title: isHindi ? 'बायोपेस्टीसाइड' : 'BioPesticides',
            description: isHindi
              ? 'प्राकृतिक सामग्री से बनी पर्यावरण-अनुकूल कीट प्रबंधन समाधान — लोगों, फसलों और पर्यावरण के लिए सुरक्षित।'
              : 'Eco-friendly pest management solutions derived from natural materials — safer for people, crops, and the environment.',
          },
          {
            title: isHindi ? 'बायोफर्टिलाइज़र' : 'BioFertilizers',
            description: isHindi
              ? 'मिट्टी की उर्वरता और पोषक तत्वों की उपलब्धता बढ़ाने वाली सूक्ष्मजीव तैयारियाँ, जो सिंथेटिक उर्वरकों पर निर्भरता कम करती हैं।'
              : 'Microbial preparations that enhance soil fertility and nutrient availability, reducing dependence on synthetic fertilizers.',
          },
          {
            title: isHindi ? 'बायोस्टिमुलेंट' : 'BioStimulants',
            description: isHindi
              ? 'प्राकृतिक पदार्थ जो पौधों में पोषक तत्व उपयोग दक्षता, अजैविक तनाव सहनशीलता और फसल गुणवत्ता में सुधार करते हैं।'
              : 'Natural substances that improve plant nutrient use efficiency, tolerance to abiotic stress, and crop quality.',
          },
        ],
      },
      companyBasics: {
        title: isHindi
          ? 'RAJ Agro Farming Training and Consultancy Services Patna के बारे में'
          : 'About RAJ Agro Farming Training and Consultancy Services Patna',
        subtitle: isHindi ? 'कंपनी परिचय' : 'Company Basics',
        body: isHindi
          ? 'RAJ Agro सुरक्षित खाद्य का सपना देखता है — ऐसा खाद्य जो पोषण से भरपूर हो, जैसा प्रकृति ने चाहा, हमारे स्वास्थ्य के लिए, हमारे बच्चों के लिए — रसायनों से नहीं, बीमारियों से दूर। और हमारे भागीदार किसानों व क्षेत्र विशेषज्ञों के कारण यह सपना साकार हो रहा है। RAJ Agro स्वस्थ, उत्पादक खेती के लिए सब कुछ प्रदान करता है — आपके खेतों के लिए जैविक इनपुट और उत्पाद, प्रशिक्षण की सुविधा, और किसानों को स्वतंत्र रूप से आगे बढ़ने के लिए सशक्त विचार और जानकारी।'
          : 'RAJ Agro dreams of safe food — food filled with nutrition, as nature intended, for our health, for our children, not laced with chemicals, not leading to diseases. And thanks to our partner farmers and field experts, this dream is coming true. RAJ Agro offers all you need for healthy, productive farming — organic inputs and products for your fields, training access, and empowering ideas and information for farmers to flourish independently.',
      },
      testimonial: {
        title: isHindi ? 'हमारे स्वस्थ ग्राहक!' : 'Our Healthy Customers!',
        quote: isHindi
          ? 'पता चला कि जैविक रूप से उगाया हुआ, प्राकृतिक रूप से प्रसंस्कृत संपूर्ण खाद्य पदार्थ लगभग बिना किसी रसायन के गोर्मे शैली में बेहद स्वादिष्ट लगता है। जाना कि स्थानीय ही नया वैश्विक है। और सबसे बढ़कर, जीवन भर के दोस्त मिले।'
          : 'Got to know that organically grown, naturally processed whole foods taste gourmet-style with hardly any chemicals. Explored how local is the new global. And more than anything, gained friends for life.',
        extended: isHindi
          ? 'RAJ AGRO FARMING TRAINING AND CONSULTANCY SERVICES PATNA ने हमारे परिवार को कृषि समुदाय के प्रति गहरा सम्मान सिखाया और हमें बेहतर खाद्य प्रेमी बनाया। RAJ Agro की हर चीज़ पसंद है: सावधानी से प्राप्त शुद्ध उपज से लेकर टीम के गर्मजोशी भरे, सूक्ष्म ध्यान तक।'
          : 'RAJ AGRO FARMING TRAINING AND CONSULTANCY SERVICES PATNA has taught our family deep respect for the farming community and made us better foodies. Love everything about RAJ Agro: from the carefully sourced pure produce to the warm, caring attention to detail of the team.',
        name: isHindi ? 'एक संतुष्ट किसान भागीदार' : 'A satisfied farmer partner',
        location: 'Bihar, India',
      },
    },
  };
  res.status(200).json(aboutData);
};
