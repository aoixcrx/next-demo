export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface ProfileData {
  name: string;
  email: string;
  role: string;
  bio: string;
  skills: string[];
  joinDate: string;
  stats: {
    posts: number;
    followers: number;
    following: number;
  };
}

async function getProfileData(): Promise<ProfileData> {
  // Simulate fetching profile data from API
  return {
    name: "Tam Tanakorn",
    email: "tam.tanakorn@example.com",
    role: "UX/UI Designer and Developer",
    bio: "Passionate developer with expertise in UX/UI Design, Next.js, React, and Node.js. Love building modern web applications with great user experiences.",
    skills: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    joinDate: "January 2024",
    stats: {
      posts: 24,
      followers: 156,
      following: 89
    }
  };
}

export default async function Profile() {
  const profile = await getProfileData();

  return (
    <section>
      <h1>Profile</h1>
      
      <div style={{ 
        display: 'grid', 
        gap: 20, 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        marginTop: 20 
      }}>
        {/* Profile Card */}
        <div className="card">
          <h3>Profile Information</h3>
          <div style={{ marginBottom: 16 }}>
            <h4 style={{ margin: '8px 0', color: '#333' }}>{profile.name}</h4>
            <p style={{ margin: '4px 0', color: '#666' }}>{profile.email}</p>
            <p style={{ margin: '4px 0', color: '#888' }}>{profile.role}</p>
          </div>
          <p style={{ color: '#555', lineHeight: 1.5 }}>{profile.bio}</p>
          <p style={{ marginTop: 12, color: '#777', fontSize: '14px' }}>
            Joined: {profile.joinDate}
          </p>
        </div>

        {/* Skills Card */}
        <div className="card">
          <h3>Skills</h3>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 8,
            marginTop: 12 
          }}>
            {profile.skills.map((skill, index) => (
              <span 
                key={index}
                style={{
                  background: '#f0f0f0',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  color: '#555'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Card */}
        <div className="card">
          <h3>Statistics</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: 16,
            marginTop: 12 
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>
                {profile.stats.posts}
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>Posts</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>
                {profile.stats.followers}
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>Followers</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>
                {profile.stats.following}
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>Following</div>
            </div>
          </div>
        </div>
      </div>

      <p style={{ marginTop: 20, color: '#666' }}>
        This profile page demonstrates server-side rendering with simulated profile data.
      </p>
    </section>
  );
}
