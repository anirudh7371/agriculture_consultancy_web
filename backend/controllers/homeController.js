export const getHomeData = (req, res) => {
  const isHindi = req.query.lang === 'hi';

  const homeData = {
    status: 'success',
    data: {
      hero: {
        kicker: isHindi ? 'राज एग्रो फार्मिंग ट्रेनिंग एंड कंसल्टेंसी सर्विसेज' : 'RAJ Agro Farming Training & Consultancy Services',
        quote: isHindi
          ? 'वैज्ञानिक प्रशिक्षण और टिकाऊ खेती समाधानों के माध्यम से कृषि को अवसर में बदलना।'
          : 'Transforming Agriculture into Opportunity through Scientific Training and Sustainable Farming Solutions.',
        subtitle: isHindi
          ? 'पटना, बिहार से — 2010 से किसानों को ऑर्गेनिक इनपुट, वैज्ञानिक प्रशिक्षण और टिकाऊ कृषि समाधान से सशक्त बना रहे हैं।'
          : 'Based in Patna, Bihar — empowering farmers with organic inputs, scientific training, and sustainable agri solutions since 2010.',
        cta: {
          primary: isHindi ? 'सेवाएं देखें' : 'Explore Services',
          primaryLink: '/services',
          secondary: isHindi ? 'हमारे बारे में' : 'About Us',
          secondaryLink: '/about',
        },
        stats: [
          { value: '14+', label: isHindi ? 'वर्षों का अनुभव' : 'Years of Experience' },
          { value: '500+', label: isHindi ? 'प्रशिक्षित किसान' : 'Farmers Trained' },
          { value: '4+', label: isHindi ? 'प्रमुख उत्पाद श्रेणियां' : 'Organic Product Categories' },
        ],
      },
      labels: {
        whatWeDo: isHindi ? 'हम क्या करते हैं' : 'What We Do',
        coreStrengths: isHindi ? 'हमारी मुख्य ताकत' : 'Our Core Strengths',
        coreStrengthsSub: isHindi
          ? 'विज्ञान, प्रशिक्षण और प्रामाणिक ऑर्गेनिक उत्पादों के माध्यम से टिकाऊ कृषि को आगे बढ़ाना।'
          : 'Driving sustainable agriculture through science, training, and authentic organic products.',
        ourJourney: isHindi ? 'हमारा सफर' : 'Our Journey',
        ourHistory: isHindi ? 'हमारा इतिहास' : 'Our History',
        historySub: isHindi
          ? 'RAJ MUSHROOM, RAJ AGRO FARMING TRAINING AND CONSULTANCY SERVICES PATNA का एक कंसोर्टियम है — यही से शुरुआत हुई।'
          : "RAJ MUSHROOM is a consortium of RAJ AGRO FARMING TRAINING AND CONSULTANCY SERVICES PATNA — here's how it all began.",
        partnerNetwork: isHindi ? 'हमारा पार्टनर नेटवर्क' : 'Our Partner Network',
        partnerSub: isHindi
          ? 'विश्वसनीय सहयोग जो टिकाऊ कृषि को आगे बढ़ाता है।'
          : 'Trusted collaboration that drives sustainable agriculture forward.',
        aboutUs: isHindi ? 'हमारे बारे में' : 'About Us',
        fullStory: isHindi ? 'पूरी कहानी पढ़ें →' : 'Read Our Full Story →',
        readyTransform: isHindi ? 'अपने फार्म को बदलने के लिए तैयार हैं?' : 'Ready to Transform Your Farm?',
        readyTransformSub: isHindi
          ? 'ऑर्गेनिक फार्मिंग, बायो-इनपुट्स और एग्री-उद्यमिता के लिए विशेषज्ञ मार्गदर्शन प्राप्त करें।'
          : 'Get expert guidance on organic farming, bio-inputs, and agri-entrepreneurship.',
        viewAllServices: isHindi ? 'सभी सेवाएं देखें' : 'View All Services',
        contactToday: isHindi ? 'आज ही संपर्क करें' : 'Contact Us Today',
      },
      highlights: [
        {
          icon: 'fa-solid fa-leaf',
          title: isHindi ? 'ऑर्गेनिक इनपुट्स' : 'Organic Inputs',
          description: isHindi
            ? 'बायोपेस्टीसाइड, बायोफर्टिलाइजर, बायोस्टिमुलेंट और अन्य एग्री इनपुट्स की इन-हाउस रेंज।'
            : 'Wide range of BioPesticides, BioFertilizers, BioStimulants & Agri Inputs manufactured in-house.',
        },
        {
          icon: 'fa-solid fa-graduation-cap',
          title: isHindi ? 'वैज्ञानिक प्रशिक्षण' : 'Scientific Training',
          description: isHindi
            ? 'आधुनिक और टिकाऊ खेती के लिए प्रैक्टिकल प्रशिक्षण कार्यक्रम।'
            : 'Hands-on farming training programs designed for modern, sustainable agricultural practices.',
        },
        {
          icon: 'fa-solid fa-handshake',
          title: isHindi ? 'कंसल्टेंसी सेवाएं' : 'Consultancy Services',
          description: isHindi
            ? 'किसानों, एग्री-उद्यमियों और एग्रो व्यवसायों के लिए विशेषज्ञ मार्गदर्शन।'
            : 'Expert guidance for farmers, agri-entrepreneurs, and agro-based businesses.',
        },
        {
          icon: 'fa-solid fa-trophy',
          title: isHindi ? 'प्रमाणित ऑर्गेनिक' : 'Certified Organic',
          description: isHindi
            ? 'प्रमाणित ऑर्गेनिक खेती, ऑर्गेनिक हॉर्टिकल्चर और सुरक्षित खाद्य उत्पादन को बढ़ावा।'
            : 'Promoting certified organic farming, organic horticulture, and safe food production.',
        },
      ],
      history: [
        {
          year: '2010',
          title: isHindi ? 'स्थापना' : 'Foundation',
          description: isHindi
            ? 'RAJ AGRO FARMING TRAINING AND CONSULTANCY SERVICES PATNA की स्थापना ऑर्गेनिक इनपुट्स के प्रचार के उद्देश्य से हुई।'
            : 'RAJ AGRO FARMING TRAINING AND CONSULTANCY SERVICES PATNA was established with a focus on promoting organic inputs for agriculture. A wide range of BioPesticides, BioFertilizers, BioStimulants and Agri inputs were introduced to local farmers.',
        },
        {
          year: '2013',
          title: isHindi ? 'तकनीक' : 'Technology',
          description: isHindi
            ? 'RAJ AGRO ने वैज्ञानिक रूप से तैयार बायो-इनपुट्स के साथ एग्री-टेक्नोलॉजी में विस्तार किया।'
            : 'RAJ AGRO expanded into agri-technology, introducing scientifically formulated bio-inputs manufactured under controlled conditions for consistent quality and efficacy.',
        },
        {
          year: '2019',
          title: isHindi ? 'मैन्युफैक्चरिंग' : 'Manufacturing',
          description: isHindi
            ? 'इन-हाउस उत्पादन क्षमता में बड़ा विस्तार हुआ और गुणवत्ता नियंत्रण को मजबूत किया गया।'
            : 'Full-scale in-house manufacturing of BioPesticides, BioFertilizers, BioStimulants and Agri Inputs began, ensuring traceability and quality from production to farm.',
        },
        {
          year: '2020',
          title: isHindi ? 'मार्केटिंग और विस्तार' : 'Marketing & Outreach',
          description: isHindi
            ? 'RAJ Mushroom कंसोर्टियम शुरू हुआ और बिहार व आसपास के राज्यों में पहुंच बढ़ी।'
            : 'RAJ Mushroom consortium launched, expanding the reach of organic agri-inputs and training programs across Bihar and neighbouring states through structured marketing channels.',
        },
      ],
      partners: [
        {
          name: 'ABNX Lab',
          logo: '/abnxlab.jpeg',
          website: 'https://www.abnxlab.com',
        },
        {
          name: 'Nanosapience Private Limited',
          logo: '/nanosapience.jpeg',
          website: 'https://www.nanosapience.com',
        },
      ],
      aboutPreview: {
        title: isHindi ? 'RAJ Agro के बारे में' : 'About RAJ Agro',
        description: isHindi
          ? 'RAJ MUSHROOM, RAJ AGRO FARMING TRAINING AND CONSULTANCY SERVICES PATNA का कंसोर्टियम है — सुरक्षित पोषण और किसानों की टिकाऊ आजीविका के लिए समर्पित।'
          : 'RAJ MUSHROOM is a consortium of RAJ AGRO FARMING TRAINING AND CONSULTANCY SERVICES PATNA — dedicated to safe, nutritious food and sustainable livelihoods for the farming community.',
        image: '/logo.jpeg',
        link: '/about',
      },
    },
  };

  res.status(200).json(homeData);
};

export const getHomeBannerData = (req, res) => {
  const isHindi = req.query.lang === 'hi';

  const bannerData = {
    status: 'success',
    data: {
      labels: {
        latestEvents: isHindi ? 'नवीनतम कार्यक्रम' : 'Latest Events',
        highlights: isHindi ? 'मुख्य बिंदु' : 'Highlights',
        ourHistory: isHindi ? 'हमारा इतिहास →' : 'Our History →',
        prevSlide: isHindi ? 'पिछली स्लाइड' : 'Previous slide',
        nextSlide: isHindi ? 'अगली स्लाइड' : 'Next slide',
        goToSlide: isHindi ? 'स्लाइड पर जाएं' : 'Go to slide',
      },
      sliderImages: [
        {
          src: '/media1.png',
          caption: isHindi ? 'मीडिया कवरेज' : 'Media Coverage',
          sub: isHindi ? 'किसानों के लिए ऑन-साइट प्रशिक्षण और व्यावहारिक मार्गदर्शन।' : 'On-site crop training and practical guidance for farmers.',
          position: 'center top',
        },
        {
          src: '/product1.png',
          caption: isHindi ? 'ताजे मशरूम' : 'Fresh Mushrooms',
          sub: isHindi ? 'ऑयस्टर, बटन और मिल्की मशरूम की बाजार-तैयार किस्में घरेलू और व्यावसायिक खरीदारों के लिए।' : 'Market-ready oyster, button, and milky mushrooms for household, retail, and commercial buyers.',
          position: 'center center',
        },
        {
          src: '/product3.png',
          caption: isHindi ? 'खेती इनपुट' : 'Cultivation Inputs',
          sub: isHindi ? 'कम्पोस्ट, केसिंग सामग्री और स्पॉन जैसे आवश्यक इनपुट वैज्ञानिक मशरूम उत्पादन के लिए।' : 'Essential inputs such as compost, casing material, and spawn for scientific mushroom production.',
          position: 'center center',
        },
        {
          src: '/product4.png',
          caption: isHindi ? 'सब्सट्रेट और कच्चा माल सहायता' : 'Substrate and Raw Material Support',
          sub: isHindi ? 'पुआल, सब्सट्रेट तैयारी और वातावरण प्रबंधन के साथ तेज और स्वस्थ मशरूम वृद्धि के लिए सहायता।' : 'Support with straw, substrate preparation, and climate management for fast and healthy mushroom growth.',
          position: 'center center',
        },
        {
          src: '/services1.png',
          caption: isHindi ? '5-दिवसीय ऑफलाइन प्रशिक्षण' : '5-Day Offline Training',
          sub: isHindi ? 'पटना में आयोजित प्रैक्टिकल कार्यक्रम जहाँ किसान मशरूम खेती को बेसिक से एडवांस स्तर तक सीखते हैं।' : 'A practical Patna-based program where farmers learn mushroom cultivation from basic to advanced level.',
          position: 'center center',
        },
        {
          src: '/media4.png',
          caption: isHindi ? 'ऋण और दस्तावेज़ीकरण सहायता' : 'Loan and Documentation Support',
          sub: isHindi ? 'मशरूम फार्म लोन, आवश्यक कागजात और सरकारी योजना मार्गदर्शन के लिए विशेषज्ञ सहायता।' : 'Expert assistance for mushroom farm loans, required paperwork, and government scheme guidance.',
          position: 'center center',
        },
      ],
      events: isHindi
        ? [
            'मशरूम कल्टीवेशन ट्रेनिंग वर्कशॉप',
            'ऑर्गेनिक फार्मिंग सर्टिफिकेशन कैंप',
            'बायोपेस्टीसाइड जागरूकता कार्यक्रम',
            'वार्षिक किसान कनेक्ट मीट 2025',
            'सस्टेनेबल एग्रीकल्चर सेमिनार',
            'सॉइल हेल्थ मैनेजमेंट कैंप',
            'वैल्यू चेन और मार्केटिंग वर्कशॉप',
          ]
        : [
            'Mushroom Cultivation Training Workshop',
            'Organic Farming Certification Camp',
            'BioPesticide Awareness Programme',
            'Annual Farmer Connect Meet 2025',
            'Sustainable Agriculture Seminar',
            'Soil Health Management Camp',
            'Value Chain & Marketing Workshop',
          ],
      highlights: [
        { icon: 'fa-solid fa-leaf', label: isHindi ? 'ऑर्गेनिक इनपुट्स' : 'Organic Inputs', value: isHindi ? '4 श्रेणियां' : '4 Categories' },
        { icon: 'fa-solid fa-graduation-cap', label: isHindi ? 'प्रशिक्षित किसान' : 'Farmers Trained', value: '500+' },
        { icon: 'fa-solid fa-trophy', label: isHindi ? 'सक्रिय वर्ष' : 'Years Active', value: '14+' },
        { icon: 'fa-solid fa-location-dot', label: isHindi ? 'स्थान' : 'Based in', value: isHindi ? 'पटना, बिहार' : 'Patna, Bihar' },
      ],
    },
  };

  res.status(200).json(bannerData);
};
