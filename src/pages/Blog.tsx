import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

const Blog = () => {
  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-primary">Loading...</div>
      </div>
    );
  }

  if (error) {
    console.error("Error fetching blogs:", error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Error loading blogs. Please try again later.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gradient mb-4">Our Blog</h1>
          <p className="text-muted-foreground">Stay updated with our latest insights and news</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs?.map((blog) => (
            <div
              key={blog.id}
              className="glass-card rounded-lg overflow-hidden hover-lift"
            >
              {blog.image_url && (
                <img
                  src={blog.image_url}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gradient">{blog.title}</h2>
                <p className="text-muted-foreground mb-4">
                  {blog.content.substring(0, 150)}...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{blog.author}</span>
                  <span className="text-sm text-muted-foreground">
                    {new Date(blog.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 glass-card rounded-lg hover:bg-secondary/20 transition-all duration-300 hover:scale-105 transform"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
