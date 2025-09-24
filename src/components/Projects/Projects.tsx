import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  // Get unique categories from projects
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our <span className="text-orange">Projects</span></h2>
          <p className="section-subtitle">
            Explore our portfolio of innovative construction and design projects
          </p>
        </div>
        
        <div className="projects-filter" role="group" aria-label="Project category filters">
           {categories.map((category, index) => (
             <button
               key={index}
               className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
               onClick={() => setActiveCategory(category)}
               aria-pressed={activeCategory === category}
               aria-label={`Filter projects by ${category} category`}
             >
               {category}
             </button>
           ))}
         </div>
        
        <div className="projects-grid" role="grid" aria-label="Projects grid">
          {filteredProjects.map((project, index) => (
            <article className={`project-card animate-fade-in stagger-${(index % 5) + 1}`} key={project.id} role="gridcell">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width="320"
                  height="240"
                />
                <div className="project-overlay">
                  <Link to={`/projects/${project.id}`} className="view-project-btn">
                    View Details
                  </Link>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;