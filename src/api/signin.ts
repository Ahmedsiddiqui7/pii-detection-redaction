// pages/api/auth/login.js
import dbConnect from '@/lib/dbConnect';
import user from '@/models/user';

export default async function handler(req: { method: string; body: { email: any; password: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message?: any; success?: boolean; user?: { id: any; name: any; email: any; }; }): void; new(): any; }; }; }) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();
    
    const { email, password } = req.body;
    
    // Find user
    const User = await user.findOne({ email }).select('+password');
    
    if (!User) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Check password
    const isMatch = await User.comparePassword(password);
    
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    res.status(200).json({ 
      success: true,
      user: {
        id: User._id,
        name: User.name,
        email: User.email
      }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}