// Batch upload utility for admin products
// Run this in browser console on the admin dashboard page

const uploadImages = async () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3002';
  const token = localStorage.getItem('adminToken');

  if (!token) {
    console.error('No admin token found. Please login first.');
    return;
  }

  // Product data - you can customize these details
  const products = [
    { file: '10.jpeg', name: 'Euro Cylinder Lock', category: 'Lock Cylinders', price: 15000, description: 'High-quality euro cylinder lock for residential and commercial use' },
    { file: '11.jpeg', name: 'Digital Door Lock', category: 'Digital Locks', price: 45000, description: 'Advanced digital door lock with keypad entry' },
    { file: '12.jpeg', name: 'Security Door Handle', category: 'Door Hardware', price: 8000, description: 'Durable security door handle with modern design' },
    { file: '13.jpeg', name: 'Mortise Lock', category: 'Smart Locks', price: 35000, description: 'Heavy-duty mortise lock for commercial applications' },
    { file: '14.jpeg', name: 'Glass Door Handle', category: 'Door Hardware', price: 12000, description: 'Elegant glass door handle with brushed finish' },
    { file: '15.jpeg', name: 'Biometric Lock', category: 'Smart Locks', price: 75000, description: 'Fingerprint recognition biometric lock system' },
    { file: '16.jpeg', name: 'Deadbolt Lock', category: 'Lock Cylinders', price: 18000, description: 'Single cylinder deadbolt for enhanced security' },
    { file: '17.jpeg', name: 'Keypad Entry System', category: 'Digital Locks', price: 55000, description: 'Electronic keypad entry with multiple user codes' },
    { file: '18.jpeg', name: 'Lever Handle Set', category: 'Door Hardware', price: 22000, description: 'Complete lever handle set with matching finish' },
    { file: '19.jpeg', name: 'Magnetic Lock', category: 'Smart Locks', price: 65000, description: 'Electromagnetic lock for access control systems' },
    { file: '20.jpeg', name: 'Panic Bar', category: 'Door Hardware', price: 28000, description: 'Emergency exit panic bar for commercial doors' },
    { file: '21.jpeg', name: 'Rim Lock', category: 'Lock Cylinders', price: 25000, description: 'Traditional rim lock with modern security features' },
    { file: '22.jpeg', name: 'Card Reader Lock', category: 'Digital Locks', price: 85000, description: 'RFID card reader access control system' },
    { file: '23.jpeg', name: 'Door Closer', category: 'Door Hardware', price: 32000, description: 'Automatic door closer for smooth operation' },
    { file: '24.jpeg', name: 'Master Key System', category: 'Smart Locks', price: 95000, description: 'Hierarchical key system for large facilities' },
    { file: '25.jpeg', name: 'Privacy Lock', category: 'Lock Cylinders', price: 14000, description: 'Privacy lock for bathrooms and bedrooms' },
    { file: '26.jpeg', name: 'Wireless Lock', category: 'Digital Locks', price: 78000, description: 'Bluetooth-enabled wireless door lock' },
    { file: '27.jpeg', name: 'Gate Lock', category: 'Door Hardware', price: 42000, description: 'Heavy-duty gate lock with padlock capability' },
    { file: '28.jpeg', name: 'Time Lock', category: 'Smart Locks', price: 125000, description: 'Programmable time-based access control' },
    { file: '29.jpeg', name: 'Cabinet Lock', category: 'Lock Cylinders', price: 5000, description: 'Small cabinet lock for furniture and storage' },
    { file: '30.jpeg', name: 'Alarm Lock', category: 'Digital Locks', price: 68000, description: 'Lock with integrated alarm system' },
    { file: '31.jpeg', name: 'Push Plate', category: 'Door Hardware', price: 16000, description: 'Decorative push plate for door protection' },
    { file: '32.jpeg', name: 'Keyless Entry', category: 'Smart Locks', price: 92000, description: 'Advanced keyless entry system with app control' },
    { file: 'black_glass_pull_handle.jpeg', name: 'Black Glass Pull Handle', category: 'Door Hardware', price: 25000, description: 'Sleek black glass pull handle for modern interiors' },
    { file: 'black_glass_pull_handle1.jpeg', name: 'Black Glass Pull Handle Premium', category: 'Door Hardware', price: 28000, description: 'Premium black glass pull handle with enhanced durability' },
    { file: 'brushed_glass_pull_handle.jpeg', name: 'Brushed Glass Pull Handle', category: 'Door Hardware', price: 26000, description: 'Brushed finish glass pull handle for contemporary design' },
    { file: 'euro_cyl.jpeg', name: 'Euro Cylinder', category: 'Lock Cylinders', price: 12000, description: 'Standard euro profile cylinder lock' },
    { file: 'euro_cylinder_lock_thumb.jpeg', name: 'Euro Cylinder Thumbturn', category: 'Lock Cylinders', price: 16000, description: 'Euro cylinder with thumbturn for internal operation' },
    { file: 'euro.jpeg', name: 'Euro Lock System', category: 'Lock Cylinders', price: 18000, description: 'Complete euro lock system with keys' },
    { file: 'face_lock.jpeg', name: 'Face Recognition Lock', category: 'Smart Locks', price: 158000, description: 'AI-powered facial recognition door lock' },
    { file: 'handle.jpeg', name: 'Door Handle', category: 'Door Hardware', price: 9000, description: 'Standard door handle with backplate' },
    { file: 'hinge.jpeg', name: 'Door Hinge', category: 'Door Hardware', price: 3000, description: 'Heavy-duty door hinge for residential use' },
    { file: 'hydraulic_door_closer.jpeg', name: 'Hydraulic Door Closer', category: 'Door Hardware', price: 45000, description: 'Adjustable hydraulic door closer for commercial doors' },
    { file: 'hydraulic_door2.jpeg', name: 'Heavy Duty Door Closer', category: 'Door Hardware', price: 52000, description: 'Industrial grade hydraulic door closer' },
    { file: 'keypad_lock.jpeg', name: 'Keypad Lock', category: 'Digital Locks', price: 38000, description: 'Electronic keypad lock with backup key' },
    { file: 'logooo.png', name: 'Logo Lock Design', category: 'Door Hardware', price: 15000, description: 'Custom logo lock design for branding' },
    { file: 'pull_handle.jpeg', name: 'Pull Handle', category: 'Door Hardware', price: 18000, description: 'Stainless steel pull handle for glass doors' },
    { file: 'ss_double_pull_handle.jpeg', name: 'Double Pull Handle', category: 'Door Hardware', price: 35000, description: 'Double-sided stainless steel pull handle' }
  ];

  console.log(`Starting batch upload of ${products.length} products...`);

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    console.log(`Uploading ${i + 1}/${products.length}: ${product.name}`);

    try {
      // Fetch image from public folder
      const imageResponse = await fetch(`/${product.file}`);
      const imageBlob = await imageResponse.blob();

      // Create FormData
      const formData = new FormData();
      formData.append('name', product.name);
      formData.append('description', product.description);
      formData.append('price', product.price.toString());
      formData.append('category', product.category);
      formData.append('image', imageBlob, product.file);

      // Upload to backend
      const response = await fetch(`${API_BASE_URL}/api/products`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Successfully uploaded: ${product.name}`);
      } else {
        const error = await response.json();
        console.error(`❌ Failed to upload ${product.name}:`, error.message);
      }
    } catch (error) {
      console.error(`❌ Error uploading ${product.name}:`, error);
    }

    // Small delay to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log('Batch upload completed!');
};

// Run the upload function
uploadImages();