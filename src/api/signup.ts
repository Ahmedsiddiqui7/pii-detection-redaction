// pages/api/auth/signup.js
import dbConnect from '@/lib/dbConnect';
import user from '@/models/user';

export default async function handler(req: { method: string; body: { name: any; email: any; password: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message?: any; success?: boolean; user?: { id: any; name: string; email: any; }; }): void; new(): any; }; }; }) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();
    
    const { name, email, password } = req.body;
    
    // Check if user already exists
    const userExists = await user.findOne({ email });
    
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Create new user
    const User = await user.create({
      name,
      email,
      password,
    });
    
    res.status(201).json({ 
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}