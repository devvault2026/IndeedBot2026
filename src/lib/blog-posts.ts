export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    author: {
        name: string;
        role: string;
        avatar: string;
    };
    content: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "mastering-the-modern-job-market",
        title: "Mastering the Modern Job Market: The AI-First Approach",
        description: "The rules of job hunting have changed. Learn how to leverage AI to stay ahead of ATS filters and land your dream role.",
        date: "Feb 12, 2026",
        readTime: "6 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200",
        author: {
            name: "Jaryd",
            role: "Founder, IndeedBot",
            avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100&h=100"
        },
        content: `
            <p>The job market in 2026 is unrecognizable compared to only a few years ago. With over 90% of Fortune 500 companies using complex AI to screen candidates, traditional "spray and pray" application methods are no longer effective.</p>
            
            <h3>The Rise of the AI Filter</h3>
            <p>Today, your resume isn't just being read by a recruiter; it's being analyzed by a neural network. This network is looking for semantic matches, sentiment, and even career progression velocity. If your resume isn't optimized for these specific markers, you're essentially invisible.</p>
            
            <h3>How IndeedBot Levels the Playing Field</h3>
            <p>At IndeedBot, we built our tools to give the power back to the candidates. By using multi-agent AI, we simulate the same ATS filters your resume will face, giving you real-time feedback and automatic rewrites that guarantee visibility.</p>
            
            <blockquote>
                "The secret isn't just applying to more jobs; it's being the mathematically perfect candidate for the few that matter."
            </blockquote>
            
            <h3>3 Steps to Win Today</h3>
            <ol>
                <li><strong>Audit your digital presence:</strong> Ensure your LinkedIn and resume share the same semantic keywords.</li>
                <li><strong>Verify the opportunity:</strong> Don't waste time on 'ghost jobs'. Use our Scout tool to verify if a role is actually hiring.</li>
                <li><strong>Personalize at scale:</strong> Never send the same resume twice. Use AI to tailor every bullet point to the specific job description.</li>
            </ol>
        `
    },
    {
        slug: "breaking-the-ghost-job-cycle",
        title: "Breaking the Ghost Job Cycle: Why Most Listings Are Fake",
        description: "Ghost jobs are a plague on the industry. We dive into why companies post them and how you can spot them instantly.",
        date: "Feb 11, 2026",
        readTime: "4 min read",
        category: "Insights",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
        author: {
            name: "Sarah Chen",
            role: "AI Ethics Lead",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
        },
        content: `
            <p>Have you ever applied to a job that seemed perfect, only to see it reposted 3 months later while your application sits in 'Under Review'? You might have encountered a ghost job.</p>
            
            <h3>Why Do Ghost Jobs Exist?</h3>
            <p>Companies post jobs they don't intend to fill for several reasons: building a talent pipeline, showing 'growth' to investors, or even just keeping their current employees on their toes. It's a waste of your time, but it serves their data needs.</p>
            
            <h3>The 'Scout' Advantage</h3>
            <p>IndeedBot's Scout agent uses cross-platform data validation to check if a company is actually hiring. By analyzing hiring velocity and employee growth rates, we assign a 'Liveliness Score' to every listing.</p>
        `
    },
    {
        slug: "resume-wording-that-wins",
        title: "The 'Semantic Shift': Resume Wording That Actually Wins",
        description: "Stop using 'Managed' and 'Led'. Learn the high-impact enterprise vocabulary that AI recruiters are looking for.",
        date: "Feb 10, 2026",
        readTime: "5 min read",
        category: "Resume Tips",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
        author: {
            name: "Marcus Thorne",
            role: "Sr. Recruitment Analyst",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
        },
        content: `
            <p>Recruiters in the elite tier don't just look for what you did; they look for how you describe it. In 2026, the vocabulary of leadership has shifted from action to orchestration.</p>
            
            <h3>High-Impact Substitutions</h3>
            <ul>
                <li>Instead of 'Managed a team', use <strong>'Orchestrated a cross-functional squad'</strong>.</li>
                <li>Instead of 'Increased revenue', use <strong>'Accelerated Q-over-Q ARR trajectory'</strong>.</li>
                <li>Instead of 'Worked on React', use <strong>'Architected scalable Micro-Frontend ecosystems'</strong>.</li>
            </ul>
        `
    }
];
