import { Program, GymFacility, MembershipPlan, GalleryItem } from '../types.ts';

export const BUSINESS_INFO = {
  name: 'NIWARA GYM BY V3 FITNESS',
  shortName: 'Niwara',
  brandPartner: 'V3 Fitness',
  tagline: 'BUILD YOUR STRONGER SELF.',
  locationName: 'Navi Peth, Pune',
  fullAddress: 'Niwara Campus, 96, Navi Peth, Thosarpaga, Pune, Maharashtra 411030',
  landmark: 'Near Niwara Old Age Home & SP College Vicinity, Navi Peth',
  phone: '+91 98220 54321',
  phoneDisplay: '+91 98220 54321',
  phoneHref: 'tel:+919822054321',
  whatsappNumber: '919822054321',
  whatsappHref: 'https://wa.me/919822054321?text=Hi%20Niwara%20Gym%2C%20I%20am%20interested%20in%20membership%20and%20trial%20details.',
  email: 'connect@niwaragym.com',
  emailHref: 'mailto:connect@niwaragym.com',
  googleMapsUrl: 'https://www.google.com/maps/place/Niwara+Gym+by+V3+Fitness/@18.5023694,73.7391214,13z/',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15132.883908684784!2d73.83516599201991!3d18.502369400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07049448a67%3A0xe54e6fc2495d0337!2sNiwara%20Gym%20by%20V3%20Fitness!5e0!3m2!1sen!2sin!4v1717000000000!5m2!1sen!2sin',
  hours: {
    weekdays: '6:00 AM – 10:00 PM',
    saturday: '6:00 AM – 10:00 PM',
    sunday: '7:00 AM – 1:00 PM',
  },
  stats: [
    { label: 'Floor Space', value: '5,000+', unit: 'Sq. Ft.' },
    { label: 'Active Members', value: '1,200+', unit: 'Pune Athletes' },
    { label: 'Certified Trainers', value: '12+', unit: 'Dedicated Coaches' },
    { label: 'Google Rating', value: '4.9', unit: 'Stars (250+ Reviews)' },
  ],
};

export const TRAINING_PROGRAMS: Program[] = [
  {
    id: 'strength',
    title: 'Gym & Strength Training',
    category: 'Core Discipline',
    tagline: 'Master biomechanics and raw strength',
    description:
      'Our flagship strength zone features Olympic standard barbells, heavy-duty power cages, dumbbells up to 50kg, and precision selectorized resistance machines designed to build progressive muscular density and endurance.',
    features: [
      'Biomechanically engineered plate-loaded machines',
      'Dedicated deadlift platforms with bumper plates',
      'Olympic benches, squat racks, and Smith machines',
      'Progressive overload tracking guidance',
    ],
    schedule: 'Daily · 6:00 AM – 10:00 PM',
    suitableFor: 'Beginners to competitive powerlifters',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    intensity: 'High',
  },
  {
    id: 'crossfit',
    title: 'CrossFit & Conditioning',
    category: 'Functional Power',
    tagline: 'High-intensity conditioning for total functional capacity',
    description:
      'Push your cardiovascular endurance and metabolic threshold with explosive kettlebell swings, battle ropes, plyometric box jumps, sled pushes, and rowing intervals programmed for functional everyday resilience.',
    features: [
      'Astro-turf sled sprint lane',
      'Competition kettlebells & medicine wall balls',
      'Concept2 rowers & assault air bikes',
      'Structured daily WOD (Workout of the Day)',
    ],
    schedule: 'Mon / Wed / Fri · Morning & Evening Batches',
    suitableFor: 'Athletes seeking agility, stamina, and fat burn',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    intensity: 'High',
  },
  {
    id: 'zumba',
    title: 'Zumba & Dance Cardio',
    category: 'Cardio & Rhythm',
    tagline: 'Energizing rhythm workouts that make cardio exhilarating',
    description:
      'Immerse yourself in upbeat, Latin-inspired cardio choreography led by certified dance fitness instructors. Designed to elevate heart rates, burn calories, tone the core, and lift your spirit in a vibrant group environment.',
    features: [
      'Certified Zumba instructors with infectious energy',
      'Full wooden studio floor designed for joint safety',
      'Acoustic surround sound & mood lighting',
      'Burn 500-700 calories per 60-minute session',
    ],
    schedule: 'Tue / Thu / Sat · 7:30 AM & 6:30 PM',
    suitableFor: 'All fitness levels looking for fun, high-energy cardio',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    intensity: 'Medium',
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    category: 'Elite 1-on-1',
    tagline: 'Tailored coaching crafted exclusively around your body and goals',
    description:
      'Pair up with senior certified personal coaches who analyze your body composition, postural alignment, and lifestyle. Receive tailored periodized training, form correction, nutritional roadmaps, and non-negotiable accountability.',
    features: [
      'Comprehensive initial fitness & postural assessment',
      'Personalized macro-nutrient and meal guidance',
      'Dedicated one-on-one form coaching & injury prevention',
      'Weekly progress check-ins and body metric tracking',
    ],
    schedule: 'Flexible Timings · By Appointment',
    suitableFor: 'Individuals wanting fast, sustainable transformation',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',
    intensity: 'Custom',
  },
];

export const GYM_FACILITIES: GymFacility[] = [
  {
    id: 'interior',
    title: 'Gym Interior & Architecture',
    subtitle: 'Spacious, Air-Conditioned & Well-Ventilated',
    description:
      'Niwara Gym is thoughtfully laid out with high ceilings, non-slip shock-absorbing rubber flooring, and ample natural lighting across an expansive 5,000+ sq ft footprint in Navi Peth. No overcrowded clutter — just pure focus.',
    highlights: [
      '5,000+ sq. ft. open floor plan',
      'Medical-grade air circulation & industrial fans',
      'Hygienic sanitation stations at every cluster',
      'Locker rooms with secure storage and clean washrooms',
    ],
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
    tag: 'Spacious Interior',
  },
  {
    id: 'equipment',
    title: 'Workout Equipment',
    subtitle: 'Commercial Grade Biomechanical Machinery',
    description:
      'We curate only top-tier commercial equipment designed to match natural anatomical movement arcs, reducing joint stress while maximizing muscle recruitment. From multi-grip cable crossovers to heavy dumbbell tiers.',
    highlights: [
      'Full free-weight dumbbell rack from 2.5 kg to 50 kg',
      'Multi-station dual cable towers & lat pull machines',
      'Specialized leg press, hack squat, and hip thrust stations',
      'Calibrated Olympic bumper plates & barbell bars',
    ],
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80',
    tag: 'Elite Equipment',
  },
  {
    id: 'environment',
    title: 'Training Environment',
    subtitle: 'Focused, Uplifting & Respectful Culture',
    description:
      'Whether you are stepping into a gym for the very first time or re-entering training after years, Niwara Gym fosters an encouraging atmosphere. Everyone re-racks their weights, cheers on milestones, and respects each other’s grind.',
    highlights: [
      'Motivating acoustic audio playlist throughout the day',
      'Zero-tolerance policy for harassment or intimidation',
      'Attentive floor trainers ready to spot and advise',
      'Hydration bar with RO filtered water dispensers',
    ],
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1200&q=80',
    tag: 'Culture & Environment',
  },
  {
    id: 'activities',
    title: 'Fitness Activities & Zones',
    subtitle: 'Dedicated Turf & Mobility Areas',
    description:
      'Beyond traditional resistance machines, access a specialized functional sprint turf for prowler sleds, agility ladders, plyometrics, warm-up stretching mats, and foam-rolling recovery zones.',
    highlights: [
      'Long-strip sprint and prowler sled track',
      'Suspension training TRX anchors',
      'Dedicated warm-up and cool-down mobility zone',
      'Heavy boxing bags for conditioning drills',
    ],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
    tag: 'Functional Zones',
  },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'monthly',
    name: 'Monthly Membership',
    period: '1 Month Access',
    badge: 'Flexible Start',
    pricingLabel: 'Contact Us for Membership Details',
    description:
      'Ideal for travelers, students on short stays, or fitness enthusiasts who prefer a flexible, month-by-month commitment without long-term contracts.',
    features: [
      'Unrestricted gym floor & cardio access during all open hours',
      'General trainer orientation & gym equipment walk-through',
      'Locker room & shower facility access',
      'RO drinking water & hygienic locker amenities',
      'Flexible renewal with no hidden cancellation fees',
    ],
  },
  {
    id: 'quarterly',
    name: 'Quarterly Membership',
    period: '3 Months Access',
    badge: 'Habit Builder',
    pricingLabel: 'Contact Us for Membership Details',
    description:
      'The sweet spot to build lasting neuromuscular adaptations, establish a solid routine, and witness noticeable strength and aesthetic changes.',
    features: [
      'Full access to strength, cardio, and functional turf zones',
      'Comprehensive baseline fitness & body composition measurement',
      'Customized beginner-to-intermediate workout roadmap',
      'Access to scheduled Zumba & group conditioning sessions',
      'Priority support from floor trainers',
    ],
  },
  {
    id: 'half-yearly',
    name: 'Half-Yearly Membership',
    period: '6 Months Access',
    badge: 'Most Popular',
    popular: true,
    pricingLabel: 'Contact Us for Membership Details',
    description:
      'Our most popular choice for committed individuals ready for serious body recomposition, sustained fat loss, and noticeable physical transformation.',
    features: [
      'Complete unrestricted gym access for 180 continuous days',
      'Bi-monthly body fat & postural assessments',
      'Complimentary personalized workout routine updates every 6 weeks',
      'Access to all weekend bootcamps and Zumba classes',
      'Complimentary temporary membership freeze allowance (up to 15 days)',
    ],
  },
  {
    id: 'annual',
    name: 'Annual Membership',
    period: '12 Months Access',
    badge: 'Best Value',
    pricingLabel: 'Contact Us for Membership Details',
    description:
      'Make fitness an enduring lifestyle. The ultimate tier providing the lowest cost per month, maximum flexibility, and full VIP fitness perks.',
    features: [
      'Full 365-day access to all Niwara Gym facilities',
      '2 Complimentary 1-on-1 Personal Training discovery sessions',
      'Detailed nutritional guidelines & quarterly fitness re-evaluations',
      'Complimentary membership pause allowance (up to 30 days)',
      'Free Niwara Gym x V3 Fitness merchandise welcome pack',
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Main Free Weights Floor',
    category: 'interiors',
    caption: 'Olympic lifting platforms, precision dumbbell racks, and spacious lifting bays.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g-2',
    title: 'Strength & Power Racks',
    category: 'equipment',
    caption: 'Commercial heavy-duty squat cages equipped with safety spotters and pull-up bars.',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g-3',
    title: 'Heavy Barbell Training',
    category: 'training',
    caption: 'Athlete performing barbell deadlifts under guided coaching posture.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g-4',
    title: 'High-Energy Zumba & Group Studio',
    category: 'community',
    caption: 'Dynamic dance cardio session on wooden flooring with mood illumination.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g-5',
    title: 'Functional Sprint Turf & Ropes',
    category: 'equipment',
    caption: 'Astro-turf track with heavy battle ropes and plyometric platforms.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g-6',
    title: 'Personal Training Form Analysis',
    category: 'training',
    caption: '1-on-1 coaching focusing on strict biomechanics and joint safety.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g-7',
    title: 'Dumbbell & Free-Weight Array',
    category: 'equipment',
    caption: 'Urethane dumbbells ranging from 2.5 kg up to 50 kg for progressive overload.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g-8',
    title: 'Community Camaraderie & High Fives',
    category: 'community',
    caption: 'A welcoming, supportive environment where members celebrate each other’s PRs.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g-9',
    title: 'Clean & Well-Ventilated Interior',
    category: 'interiors',
    caption: 'Bright natural lighting and spotless sanitation stations throughout the facility.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80',
  },
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Aditya Deshpande',
    location: 'Navi Peth, Pune',
    rating: 5,
    quote:
      'Niwara Gym is genuinely the best training facility in the Navi Peth area. No fake hype or overcrowding — just clean, well-maintained equipment and trainers who actively correct your posture instead of staring at their phones.',
    duration: 'Member for 1.5 Years',
  },
  {
    id: 't-2',
    name: 'Sneha Kulkarni',
    location: 'Sadashiv Peth, Pune',
    rating: 5,
    quote:
      'The Zumba and morning conditioning batches are fantastic! The coaches are welcoming, and the atmosphere feels so safe and encouraging for women. Highly recommend V3 Fitness management.',
    duration: 'Member for 8 Months',
  },
  {
    id: 't-3',
    name: 'Rohan Shinde',
    location: 'Tilak Road, Pune',
    rating: 5,
    quote:
      'Joined for strength training and fat loss. In 6 months under coach guidance, I dropped 11 kg while adding significant strength on all my compound lifts. The vibe at Niwara keeps you coming back.',
    duration: 'Member for 1 Year',
  },
];

export const FAQS = [
  {
    q: 'What are the operating hours of Niwara Gym by V3 Fitness?',
    a: 'We are open Monday through Saturday from 6:00 AM to 10:00 PM uninterrupted. On Sundays, we are open for recovery and workouts from 7:00 AM to 1:00 PM.',
  },
  {
    q: 'Where exactly is the gym located in Pune?',
    a: 'We are situated inside the Niwara Campus, 96, Navi Peth, Thosarpaga, Pune, Maharashtra 411030 — conveniently accessible from Tilak Road, Sadashiv Peth, and SP College area.',
  },
  {
    q: 'Can I get a trial session or visit the facility before enrolling?',
    a: 'Yes, absolutely! We encourage prospective members to visit our facility in Navi Peth for an equipment walk-through and trial consultation. Submit the enquiry form or ping us on WhatsApp to schedule your visit.',
  },
  {
    q: 'Are personal training and diet advice available?',
    a: 'Yes. We have certified personal trainers who specialize in weight loss, bodybuilding, athletic conditioning, and post-rehab mobility. They provide customized workout splits along with practical macro-nutrient roadmaps.',
  },
  {
    q: 'Is there parking available at Niwara Campus?',
    a: 'Yes, safe and dedicated two-wheeler and four-wheeler parking is available on campus for our registered members during gym hours.',
  },
];
