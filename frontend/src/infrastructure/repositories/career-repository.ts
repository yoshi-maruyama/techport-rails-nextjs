import backendClient from "@/lib/backend-client";
import Career from "@/models/career";

class CareerRepository {
  async getCareers(): Promise<Career[]> {
    const res = await backendClient.get("/api/v1/careers");
    if (res.ok) {
      const data = await res.json();
      return data.map((career: any) => {
        return this.toModel(career);
      });
    } else {
      return [];
    }
  }

  private toModel(data: any) {
    return new Career(
      data.id,
      data.title,
      data.description,
      data.startedAt,
      data.endedAt
    );
  }
}

const careerRepository = new CareerRepository();
export default careerRepository;
