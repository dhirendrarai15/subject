import React, { useState } from 'react';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Users, 
  FolderOpen, 
  Award, 
  BookOpen, 
  Zap,
  Upload,
  Download,
  FileText
} from 'lucide-react';
import { useContent, Experience, Project, Certification, BlogPost, Skill } from '../context/ContentContext';

const AdminDashboard: React.FC = () => {
  const { 
    experiences, 
    projects, 
    certifications, 
    blogPosts, 
    skills,
    addExperience,
    addProject,
    addCertification,
    addBlogPost,
    addSkill,
    updateExperience,
    updateProject,
    deleteExperience,
    deleteProject
  } = useContent();

  const [activeTab, setActiveTab] = useState('experiences');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const tabs = [
    { id: 'experiences', label: 'Experiences', icon: Users, count: experiences.length },
    { id: 'projects', label: 'Projects', icon: FolderOpen, count: projects.length },
    { id: 'certifications', label: 'Certifications', icon: Award, count: certifications.length },
    { id: 'blog', label: 'Blog Posts', icon: BookOpen, count: blogPosts.length },
    { id: 'skills', label: 'Skills', icon: Zap, count: skills.length },
    { id: 'resume', label: 'Resume', icon: FileText, count: 0 }
  ];

  const handleAdd = (type: string) => {
    setEditingItem(null);
    setActiveTab(type);
    setIsModalOpen(true);
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

const handleDelete = (type: string, id: string) => {
  if (!window.confirm('Are you sure you want to delete this item?')) return;

  switch (type) {
    case 'experiences':
      deleteExperience(id);
      break;
    case 'projects':
      deleteProject(id);
      break;
    case 'certifications':
      deleteCertification(id);
      break;
    case 'blog':
      deleteBlogPost(id);
      break;
    case 'skills':
      deleteSkill(id);
      break;
    default:
      break;
  }
};


  const handleSave = (formData: any) => {
    if (editingItem) {
      // Update existing item
      if (activeTab === 'experiences') {
        updateExperience(editingItem.id, formData);
      } else if (activeTab === 'projects') {
        updateProject(editingItem.id, formData);
      }
    } else {
      // Add new item
      if (activeTab === 'experiences') {
        addExperience(formData);
      } else if (activeTab === 'projects') {
        addProject(formData);
      } else if (activeTab === 'certifications') {
        addCertification(formData);
      } else if (activeTab === 'blog') {
        addBlogPost(formData);
      } else if (activeTab === 'skills') {
        addSkill(formData);
      }
    }
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setResumeFile(file);
      // In a real app, you would upload this to a server
      localStorage.setItem('resumeUploaded', 'true');
      alert('Resume uploaded successfully!');
    } else {
      alert('Please upload a PDF file.');
    }
  };

  const handleResumeDownload = () => {
    // Create a mock PDF download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,'; // Mock PDF data
    link.download = 'John_Doe_Resume.pdf';
    link.click();
  };

return (
  <div className="min-h-screen bg-gray-50 pt-20">
    {/* Header */}
    <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage your portfolio content</p>
        </div>
      </div>
    </div>


      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <IconComponent className="h-5 w-5 mr-2" />
                  {tab.label}
                  {tab.count > 0 && (
                    <span className="ml-2 bg-gray-100 text-gray-900 py-0.5 px-2 rounded-full text-xs">
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content Area */}
        <div className="space-y-6">
          {/* Action Bar */}
          {activeTab !== 'resume' && (
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900 capitalize">
                Manage {activeTab}
              </h2>
              <button
                onClick={() => handleAdd(activeTab)}
                className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add New
              </button>
            </div>
          )}

          {/* Resume Management */}
          {activeTab === 'resume' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Resume Management</h2>
              <div className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Resume</h3>
                  <p className="text-gray-600 mb-4">Choose a PDF file to upload your latest resume</p>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleResumeUpload}
                    className="hidden"
                    id="resume-upload"
                  />
                  <label
                    htmlFor="resume-upload"
                    className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 cursor-pointer transition-colors"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Choose File
                  </label>
                </div>

                {localStorage.getItem('resumeUploaded') && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-green-600 mr-2" />
                        <span className="text-green-800 font-medium">Resume uploaded successfully</span>
                      </div>
                      <button
                        onClick={handleResumeDownload}
                        className="inline-flex items-center px-3 py-1 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 transition-colors"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Data Tables */}
          {activeTab === 'experiences' && (
            <ExperiencesTable 
              experiences={experiences} 
              onEdit={handleEdit}
              onDelete={(id) => handleDelete('experiences', id)}
            />
          )}

          {activeTab === 'projects' && (
            <ProjectsTable 
              projects={projects} 
              onEdit={handleEdit}
              onDelete={(id) => handleDelete('projects', id)}
            />
          )}

          {activeTab === 'certifications' && (
  <CertificationsTable 
    certifications={certifications} 
    onEdit={handleEdit} 
    onDelete={(id) => handleDelete('certifications', id)}
  />
)}

{activeTab === 'blog' && (
  <BlogTable 
    blogPosts={blogPosts} 
    onEdit={handleEdit} 
    onDelete={(id) => handleDelete('blog', id)}
  />
)}

{activeTab === 'skills' && (
  <SkillsTable 
    skills={skills} 
    onEdit={handleEdit} 
    onDelete={(id) => handleDelete('skills', id)}
  />
)}

        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <FormModal
          type={activeTab}
          item={editingItem}
          onSave={handleSave}
          onClose={() => {
            setIsModalOpen(false);
            setEditingItem(null);
          }}
        />
      )}
    </div>
  );
};

// Table Components
const ExperiencesTable = ({ experiences, onEdit, onDelete }: any) => (
  <div className="bg-white rounded-lg shadow overflow-hidden">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organization</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {experiences.map((experience: Experience) => (
          <tr key={experience.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{experience.title}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{experience.organization}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{experience.date}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button
                onClick={() => onEdit(experience)}
                className="text-emerald-600 hover:text-emerald-900 mr-4"
              >
                <Edit className="h-4 w-4" />
              </button>
              <button
                onClick={() => onDelete(experience.id)}
                className="text-red-600 hover:text-red-900"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ProjectsTable = ({ projects, onEdit, onDelete }: any) => (
  <div className="bg-white rounded-lg shadow overflow-hidden">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tags</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {projects.map((project: Project) => (
          <tr key={project.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{project.title}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {project.tags.slice(0, 2).join(', ')}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button
                onClick={() => onEdit(project)}
                className="text-emerald-600 hover:text-emerald-900 mr-4"
              >
                <Edit className="h-4 w-4" />
              </button>
              <button
                onClick={() => onDelete(project.id)}
                className="text-red-600 hover:text-red-900"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const CertificationsTable = ({ certifications, onEdit }: any) => (
  <div className="bg-white rounded-lg shadow overflow-hidden">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {certifications.map((cert: Certification) => (
          <tr key={cert.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cert.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cert.platform}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cert.year}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
  <button
    onClick={() => onEdit(cert)}
    className="text-emerald-600 hover:text-emerald-900 mr-4"
  >
    <Edit className="h-4 w-4" />
  </button>
  <button
    onClick={() => onDelete(cert.id)}
    className="text-red-600 hover:text-red-900"
  >
    <Trash2 className="h-4 w-4" />
  </button>
</td>

          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const BlogTable = ({ blogPosts, onEdit }: any) => (
  <div className="bg-white rounded-lg shadow overflow-hidden">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Publish Date</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tags</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {blogPosts.map((post: BlogPost) => (
          <tr key={post.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{post.title}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.publishDate}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {post.tags.slice(0, 2).join(', ')}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
  <button
    onClick={() => onEdit(post)}
    className="text-emerald-600 hover:text-emerald-900 mr-4"
  >
    <Edit className="h-4 w-4" />
  </button>
  <button
    onClick={() => onDelete(post.id)}
    className="text-red-600 hover:text-red-900"
  >
    <Trash2 className="h-4 w-4" />
  </button>
</td>

          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SkillsTable = ({ skills, onEdit }: any) => (
  <div className="bg-white rounded-lg shadow overflow-hidden">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {skills.map((skill: Skill) => (
          <tr key={skill.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{skill.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{skill.category}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{skill.level}%</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
  <button
    onClick={() => onEdit(skill)}
    className="text-emerald-600 hover:text-emerald-900 mr-4"
  >
    <Edit className="h-4 w-4" />
  </button>
  <button
    onClick={() => onDelete(skill.id)}
    className="text-red-600 hover:text-red-900"
  >
    <Trash2 className="h-4 w-4" />
  </button>
</td>

          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Form Modal Component
const FormModal = ({ type, item, onSave, onClose }: any) => {
  const [formData, setFormData] = useState(item || {});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(',').map(tag => tag.trim());
    setFormData((prev: any) => ({ ...prev, tags }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {item ? 'Edit' : 'Add'} {type.slice(0, -1)}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {type === 'experiences' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title || ''}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization || ''}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="text"
                    name="date"
                    value={formData.date || ''}
                    onChange={handleChange}
                    placeholder="2020 - Present"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description || ''}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
            </>
          )}

          {type === 'projects' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title || ''}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Summary</label>
                <textarea
                  name="summary"
                  value={formData.summary || ''}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Impact</label>
                <textarea
                  name="impact"
                  value={formData.impact || ''}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL (optional)</label>
                <input
                  type="url"
                  name="image"
                  value={formData.image || ''}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma-separated)</label>
                <input
                  type="text"
                  value={formData.tags?.join(', ') || ''}
                  onChange={handleTagsChange}
                  placeholder="Green Chemistry, Agriculture, Sustainability"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </>
          )}

          {type === 'skills' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Skill Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name || ''}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    name="category"
                    value={formData.category || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Software">Software</option>
                    <option value="Soft Skills">Soft Skills</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Level (1-100)</label>
                  <input
                    type="number"
                    name="level"
                    min="1"
                    max="100"
                    value={formData.level || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
              </div>
            </>
          )}

          <div className="flex justify-end space-x-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center"
            >
              <Save className="h-4 w-4 mr-2" />
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;