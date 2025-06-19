const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  /**
   * Make a request to the API
   * @param {string} endpoint - API endpoint
   * @param {RequestInit} options - Fetch options
   * @param {RequestInit} headers - Fetch headers
   * @returns {Promise<any>} Response data
   */
  async request(endpoint, options = {}, headers = {}) {
    const url = `${this.baseURL}${endpoint}`;

    const config = {
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      ...options,
    };

    const response = await fetch(url, config);

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.detail || `HTTP ${response.status}`);
    }

    return response.json();
  }

  /**
   * Get CV Info
   */
  async getCVInfo() {
    return this.request("/api/cv/info");
  }

  /**
   * Get all projects
   */
  async getProjects() {
    return this.request("/api/projects");
  }

  /**
   * Get all skills
   */
  async getSkills() {
    return this.request("/api/skills");
  }

  /**
   * Get all facts
   */
  async getFacts() {
    return this.request("/api/facts");
  }

  /**
   * Get all education records
   */
  async getEducation() {
    return this.request("/api/education");
  }

  /**
   * Get all certifications
   */
  async getCertifications() {
    return this.request("/api/certifications");
  }

  /**
   * Send form to Telegram
   */
  async sendForm(name, email, message) {
    return this.request("/api/send-form", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
  }
}

export const api = new ApiClient(API_BASE_URL);
