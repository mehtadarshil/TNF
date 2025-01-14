import { useQuery } from "@tanstack/react-query";
    import { supabase } from "@/integrations/supabase/client";
    import { Trophy, Users, Clock } from "lucide-react";

    const Impact = () => {
      const { data: statistics } = useQuery({
        queryKey: ["statistics"],
        queryFn: async () => {
          const { data, error } = await supabase
            .from("statistics")
            .select("*")
            .single();
          
          if (error) {
            console.error("Error fetching statistics:", error);
            throw error;
          }
          
          return data;
        },
      });

      return (
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-4xl font-bold mb-4 text-gradient">Our Impact</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Delivering excellence and building trust through successful partnerships
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-300 animate-fade-up" style={{ animationDelay: "100ms" }}>
                <div className="flex justify-center mb-4">
                  <Trophy className="w-12 h-12 text-primary animate-pulse" />
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2">{statistics?.satisfied_clients || 0}+</h3>
                <p className="text-muted-foreground">Satisfied Clients</p>
              </div>

              <div className="glass-card p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-300 animate-fade-up" style={{ animationDelay: "200ms" }}>
                <div className="flex justify-center mb-4">
                  <Users className="w-12 h-12 text-primary animate-pulse" />
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2">{statistics?.completed_projects || 0}+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>

              <div className="glass-card p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-300 animate-fade-up" style={{ animationDelay: "300ms" }}>
                <div className="flex justify-center mb-4">
                  <Clock className="w-12 h-12 text-primary animate-pulse" />
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
                <p className="text-muted-foreground">Support Available</p>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Impact;
