import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../../data/projects';
import './ProjectDetail.css';

// Define the Project interface locally
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  client: string;
  completionDate: string;
  technologies: string[];
  link?: string;
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      const foundProject = getProjectById(id);
      if (foundProject) {
        setProject(foundProject as Project);
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <section className="project-detail-section">
        <div className="container">
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading project details...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="project-detail-section">
        <div className="container">
          <div className="not-found">
            <h2>Project Not Found</h2>
            <p>The project you're looking for doesn't exist or has been removed.</p>
            <Link to="/projects" className="btn-primary">Back to Projects</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail-section">
      <div className="container">
        <div className="project-header">
          <h1>{project.title}</h1>
          <Link to="/projects" className="back-link">
            <span>←</span> Back to Projects
          </Link>
        </div>
        
        <div className="project-content">
          <div className="project-image">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              width="600"
              height="400"
            />
          </div>
          
          <div className="project-info">
            <div className="project-overview">
              <h2>Project Overview</h2>
              <p>{project.description}</p>
            </div>
            
            <div className="project-meta">
              <div className="meta-item">
                <h3>Client</h3>
                <p>{project.client}</p>
              </div>
              
              <div className="meta-item">
                <h3>Completion Date</h3>
                <p>{project.completionDate}</p>
              </div>
              
              <div className="meta-item">
                <h3>Category</h3>
                <p>{project.category}</p>
              </div>
              
              <div className="meta-item">
                <h3>Technologies</h3>
                <ul className="technologies-list">
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              
              {project.link && (
                <div className="meta-item">
                  <h3>Project Link</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    Visit Project
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;