class BackendClient {
  private DOMAIN = process.env.BACKEND_DOMAIN;
  async get(path: string) {
    return await fetch(`${this.DOMAIN}${path}`);
  }
}

const backendClient = new BackendClient();
export default backendClient;
