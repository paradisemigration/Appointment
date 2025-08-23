export interface Testimonial {
  id: string;
  name: string;
  city: string;
  country: string;
  visaType: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    city: 'Mumbai',
    country: 'France',
    visaType: 'Tourist Visa',
    rating: 5,
    comment: 'Excellent service! Got my France tourist visa appointment within 24 hours. The team was very professional and guided me through every step.',
    date: '2024-01-15',
    avatar: '👩‍💼'
  },
  {
    id: '2',
    name: 'Ahmed Khan',
    city: 'Dubai',
    country: 'Germany',
    visaType: 'Work Permit',
    rating: 5,
    comment: 'Amazing experience! The document review service saved me from potential rejection. Highly recommend for Germany work visa applications.',
    date: '2024-01-12',
    avatar: '👨‍💼'
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    city: 'Delhi',
    country: 'Canada',
    visaType: 'Study Visa',
    rating: 5,
    comment: 'Best visa service ever! They helped me get my Canada study visa appointment so quickly. The WhatsApp support was incredibly helpful.',
    date: '2024-01-10',
    avatar: '👩‍🎓'
  },
  {
    id: '4',
    name: 'Rajesh Patel',
    city: 'Ahmedabad',
    country: 'USA',
    visaType: 'Tourist Visa',
    rating: 5,
    comment: 'Professional service with 98% success rate as promised! Got my USA visa approved without any hassle. Thank you so much!',
    date: '2024-01-08',
    avatar: '👨‍💻'
  },
  {
    id: '5',
    name: 'Fatima Al-Rashid',
    city: 'Riyadh',
    country: 'UK',
    visaType: 'Visit Visa',
    rating: 5,
    comment: 'Fantastic team! They made my UK visa application process so smooth. Got the appointment in just 2 days. Excellent customer service!',
    date: '2024-01-05',
    avatar: '👩‍🔬'
  },
  {
    id: '6',
    name: 'Mohammad Ali',
    city: 'Karachi',
    country: 'Australia',
    visaType: 'Work Permit',
    rating: 5,
    comment: 'Outstanding service! The experts guided me perfectly for my Australia work visa. Fast, reliable, and very professional team.',
    date: '2024-01-03',
    avatar: '👨‍🔧'
  }
];
