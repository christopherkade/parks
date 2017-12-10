export class Attraction {
  id: string;
  name: string;
  active: boolean;
  waitTime: number;
  status: string;
  fastPass: boolean;

  constructor(id?: string, title?: string, active?: boolean, waitTime?: number, status?: string, fastPass?: boolean) {
    this.id = id;
    this.name = title;
    this.active = active;
    this.waitTime = waitTime;
    this.status = status;
    this.fastPass = fastPass;
  }
}
