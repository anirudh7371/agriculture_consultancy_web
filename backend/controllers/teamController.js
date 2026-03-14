export const getTeamData = (req, res) => {
  const isHindi = req.query.lang === 'hi';

  const teamData = {
    status: 'success',
    data: {
      heading: isHindi ? 'हमारी टीम' : 'Our Team',
      subheading: isHindi
        ? 'कृषि परिवर्तन के RAJ Agro मिशन के पीछे काम करने वाले समर्पित विशेषज्ञ।'
        : 'The passionate experts behind RAJ Agro\'s mission to transform agriculture.',
      members: [
        {
          id: 1,
          name: 'Raj Kumar',
          role: isHindi ? 'संस्थापक और मुख्य सलाहकार' : 'Founder & Chief Consultant',
          bio: isHindi
            ? 'दूरदर्शी एग्री-उद्यमी और RAJ AGRO FARMING TRAINING AND CONSULTANCY SERVICES PATNA के संस्थापक। ऑर्गेनिक फार्मिंग, मशरूम कल्टीवेशन और बायो-इनपुट फॉर्मुलेशन में दशकों के अनुभव के साथ, राज ने बिहार भर में सैकड़ों किसानों को प्रशिक्षित किया है।'
            : 'Visionary agri-entrepreneur and founder of RAJ AGRO FARMING TRAINING AND CONSULTANCY SERVICES PATNA. With decades of hands-on experience in organic farming, mushroom cultivation, and bio-input formulation, Raj has trained hundreds of farmers across Bihar.',
          image: '/team_raj.jpeg',
          expertise: isHindi
            ? ['जैविक खेती', 'मशरूम खेती', 'जैव-इनपुट निर्माण', 'कृषि परामर्श']
            : ['Organic Farming', 'Mushroom Cultivation', 'Bio-input Formulation', 'Agri Consultancy'],
        }
      ],
      joinCta: {
        title: isHindi ? 'हमारी बढ़ती टीम से जुड़ें' : 'Join Our Growing Team',
        description: isHindi
          ? 'हम हमेशा ऐसे उत्साही लोगों की तलाश में रहते हैं जो टिकाऊ कृषि के हमारे विज़न को साझा करते हैं।'
          : 'We are always looking for passionate individuals who share our vision for sustainable agriculture. Explore our open positions.',
        link: '/careers',
        buttonText: isHindi ? 'खाली पद देखें' : 'View Open Positions'
      }
    }
  };
  res.status(200).json(teamData);
};
