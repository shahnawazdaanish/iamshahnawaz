import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/users", () => {
    return HttpResponse.json([
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
        firstName: "John",
        lastName: "Maverick",
      },
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3e",
        firstName: "Kar",
        lastName: "Marx",
      },
    ]);
  }),
  http.get("/work_experiences", () => {
    return HttpResponse.json([
      {
        id: "1",
        companyName: "Software Shop Limited (SSLWireless)",
        positions: [
          {
            position: "Software Associate",
            skills: [],
            startDate: "2014-09-14",
            endDate: "2016-01-02",
            jd: '',
          },
          {
            position: "Software Associate",
            skills: [],
            startDate: "2014-09-14",
            endDate: "2016-01-02",
            jd: '',
          },
        ],
      },
    ]);
  }),
];
