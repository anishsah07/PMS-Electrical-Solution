const data = {
  companyInfo: {
    name: "PMS Electrical Solution",
    phone: "+977 9851232966",
    whatsapp: "9779851232966",
    email: "pmselectrical07@gmail.com",
    address: "Lalitpur, Nepal",
    workingHours: "Mon – Sat: 10:00 AM – 6:00 PM",
    founded: "2010",
    projectsCompleted: "1200+",
    happyClients: "850+",
    yearsExperience: "14+",
    // IMPORTANT: Replace this with your actual Google Maps link to get the 'Write a Review' button working perfectly
    googleBusiness: "https://share.google/GnA3VQJ5f109XD9Ox",
  },

  socialLinks: [
    { platform: "Facebook", url: "https://www.facebook.com/profile.php?id=61589527647548", icon: "fa-brands fa-facebook-f" },
    { platform: "Instagram", url: "https://www.instagram.com/pmselectrical07/", icon: "fa-brands fa-instagram" },
    { platform: "TikTok", url: "https://www.tiktok.com/@pmselectricalsolution", icon: "fa-brands fa-tiktok" },
  ],

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  services: [
    {
      id: 1,
      icon: "zap",
      title: "Residential Electrical",
      description:
        "Complete home wiring, panel upgrades, circuit installation, safety inspections, and all residential electrical needs handled by certified professionals.",
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      icon: "building-2",
      title: "Commercial & Office Electrical",
      description:
        "Full-scale commercial wiring, lighting systems, power distribution, and electrical infrastructure for offices, shops, and industrial units.",
      image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      icon: "network",
      title: "Networking & Data Cabling",
      description:
        "Structured cabling, LAN/WAN setup, ethernet wiring, server room cabling, and complete network infrastructure for homes and businesses.",
      image: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      icon: "wifi",
      title: "Wi-Fi & Access Point Setup",
      description:
        "Professional Wi-Fi planning, access point installation, wireless coverage optimization, and seamless connectivity solutions for any space.",
      image: "https://images.pexels.com/photos/4218546/pexels-photo-4218546.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      icon: "camera",
      title: "CCTV & Security Camera",
      description:
        "IP camera installation, DVR/NVR setup, remote monitoring configuration, and complete surveillance systems for homes and commercial properties.",
      image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      icon: "phone",
      title: "Telephone & EPABX Setup",
      description:
        "Office telephone systems, EPABX/PBX installation, intercom wiring, VoIP setup, and complete communication infrastructure solutions.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      icon: "lightbulb",
      title: "Lighting & Energy Solutions",
      description:
        "LED lighting installation, smart lighting controls, energy-efficient upgrades, and customized lighting design for every environment.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 8,
      icon: "shield-check",
      title: "Electrical Safety & Maintenance",
      description:
        "Periodic maintenance contracts, safety audits, MCB/ELCB installation, earthing solutions, and emergency electrical repair services.",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ],

  products: [
    {
      id: 1,
      category: "Networking",
      name: "Network Switches",
      description: "Managed & unmanaged switches for home and enterprise networks. Multiple port options available.",
      icon: "server",
    },
    {
      id: 2,
      category: "Networking",
      name: "Wireless Access Points",
      description: "High-performance APs for seamless Wi-Fi coverage across large spaces and multi-floor buildings.",
      icon: "wifi",
    },
    {
      id: 3,
      category: "Networking",
      name: "Ethernet Cables & Patch Panels",
      description: "Cat5e, Cat6, Cat6A cables and patch panels for reliable structured cabling installations.",
      icon: "cable",
    },
    {
      id: 4,
      category: "Security",
      name: "IP & CCTV Cameras",
      description: "Indoor/outdoor security cameras with HD resolution, night vision, and remote access capability.",
      icon: "camera",
    },
    {
      id: 5,
      category: "Security",
      name: "DVR / NVR Recorders",
      description: "Digital and network video recorders with multi-channel support for continuous and motion recording.",
      icon: "monitor-play",
    },
    {
      id: 6,
      category: "Electrical",
      name: "MCB & Distribution Boards",
      description: "Miniature circuit breakers and distribution boards for safe power management in homes and offices.",
      icon: "toggle-left",
    },
    {
      id: 7,
      category: "Electrical",
      name: "LED Lights & Fixtures",
      description: "Energy-saving LED panels, strip lights, downlights, and industrial fixtures for all applications.",
      icon: "lightbulb",
    },
    {
      id: 8,
      category: "Communication",
      name: "EPABX / Telephone Systems",
      description: "Business phone systems and EPABX units for efficient internal and external communication.",
      icon: "phone",
    },
  ],

  whyChooseUs: [
    {
      icon: "badge-check",
      title: "Certified Professionals",
      description: "Our team consists of licensed and certified electricians and network engineers with proven expertise.",
    },
    {
      icon: "clock",
      title: "On-Time Service",
      description: "We respect your time. Our teams arrive on schedule and complete work within committed timelines.",
    },
    {
      icon: "headphones",
      title: "24/7 Support",
      description: "Round-the-clock support for emergencies. We are always available when you need us most.",
    },
    {
      icon: "indian-rupee",
      title: "Transparent Pricing",
      description: "No hidden charges. You receive a clear, itemized estimate before any work begins.",
    },
    {
      icon: "shield-check",
      title: "Quality Guaranteed",
      description: "We use only genuine, high-quality materials and provide service warranty on all completed work.",
    },
    {
      icon: "users",
      title: "End-to-End Solutions",
      description: "From planning to execution to after-service, we manage the entire project for you seamlessly.",
    },
  ],

  testimonials: [
    {
      name: "Rajesh Patel",
      role: "Homeowner",
      message:
        "PMS Electrical Solution handled our entire home electrical and setup. The team was professional, punctual, and the work quality exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Meena Shah",
      role: "Homeowner",
      message:
        "They installed CCTV cameras and rewired our home. Very clean work, no mess left behind. Highly recommend them for residential electrical needs.",
      rating: 5,
    },
    {
      name: "Arvind Kumar",
      role: "IT Manager, TechCorp Ltd.",
      message:
        "Excellent structured cabling and networking work for our new office floor. The team understood our requirements perfectly and delivered on time.",
      rating: 5,
    },
  ],
};
