export default function ServicesPage() {
  const services = [
    {
      title: 'Tourist Visa Services',
      description: 'Complete assistance for tourist and visitor visa applications',
      features: ['Document preparation', 'Appointment booking', 'Application review', 'Follow-up support'],
      price: 'From $99',
      icon: '🏖️'
    },
    {
      title: 'Business Visa Services', 
      description: 'Professional business visa solutions for corporate travelers',
      features: ['Express processing', 'Corporate packages', 'Multi-country visas', 'Dedicated support'],
      price: 'From $149',
      icon: '💼'
    },
    {
      title: 'Student Visa Services',
      description: 'Educational visa assistance for students worldwide',
      features: ['University liaison', 'Document verification', 'Interview preparation', 'Post-arrival support'],
      price: 'From $199',
      icon: '🎓'
    },
    {
      title: 'Work Visa Services',
      description: 'Employment visa solutions for job seekers',
      features: ['Employer coordination', 'Legal compliance', 'Fast-track options', 'Family visas'],
      price: 'From $299',
      icon: '🔧'
    }
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '20px 0'
      }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
                🌍 VFS Portal
              </h1>
            </div>
            <nav>
              <a href="/" style={{ color: 'white', textDecoration: 'none', margin: '0 20px' }}>Home</a>
              <a href="/services" style={{ color: 'white', textDecoration: 'none', margin: '0 20px' }}>Services</a>
              <a href="/contact" style={{ color: 'white', textDecoration: 'none', margin: '0 20px' }}>Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '60px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '20px' }}>
            Our Services
          </h1>
          <p style={{ fontSize: '18px', opacity: 0.9 }}>
            Comprehensive visa solutions for all your travel needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="grid grid-2">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <div style={{ fontSize: '48px', marginBottom: '15px' }}>{service.icon}</div>
                  <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>{service.title}</h3>
                  <p style={{ color: '#666', marginBottom: '20px' }}>{service.description}</p>
                  <div style={{ 
                    fontSize: '24px', 
                    fontWeight: 'bold', 
                    color: '#007bff',
                    marginBottom: '20px' 
                  }}>
                    {service.price}
                  </div>
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ marginBottom: '15px' }}>What's included:</h4>
                  <ul style={{ paddingLeft: '20px' }}>
                    {service.features.map((feature, i) => (
                      <li key={i} style={{ marginBottom: '8px' }}>✅ {feature}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <a href="/" className="btn btn-primary">
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '36px' }}>
            Our Process
          </h2>

          <div className="grid grid-3">
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#007bff',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                margin: '0 auto 20px'
              }}>
                1
              </div>
              <h3 style={{ marginBottom: '15px' }}>Consultation</h3>
              <p>Free consultation to understand your visa requirements and travel plans.</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#28a745',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                margin: '0 auto 20px'
              }}>
                2
              </div>
              <h3 style={{ marginBottom: '15px' }}>Documentation</h3>
              <p>Complete document preparation and review by our expert team.</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#ffc107',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                margin: '0 auto 20px'
              }}>
                3
              </div>
              <h3 style={{ marginBottom: '15px' }}>Submission</h3>
              <p>Application submission and appointment booking with embassy/consulate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '40px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <p>&copy; 2024 VFS Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
