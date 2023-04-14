export type User = Readonly<{
  name: string;
  token: string;
}>;

export const users: User[] = [
  {
    name: 'John Admin',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gQWRtaW4iLCJpYXQiOjE1MTYyMzkwMjIsInBlcnNvbklkIjoiODEzNDU0ZTctOTk0Ny00OWY4LWI4MWItODI2MDVhZDY3ZmM2IiwiZ3JvdXBzIjpbImNoYXQuYWRtaW4iLCJjaGF0LnVzZXIiXX0.ClRD965x9KzOFalk6MFCSVDj8F8wGpo8eAQ0YGQhbQo',
  },
  {
    name: 'Terry Admin',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlcnJ5IEFkbWluIiwiaWF0IjoxNTE2MjM5MDIyLCJwZXJzb25JZCI6ImQxNWM2M2E4LWRjY2YtNDEzNy1hNzVkLWI2YzUwZTBiOGQzMiIsImdyb3VwcyI6WyJjaGF0LmFkbWluIiwiY2hhdC51c2VyIl19.KyqIpU6q3w5ctAzeEOC8bnsgK-MCCXzYe9xRRQcu0tU',
  },
  {
    name: 'John User',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gVXNlciIsImlhdCI6MTUxNjIzOTAyMiwicGVyc29uSWQiOiI5ZDgyOWNiNS00ZTRmLTQ3NWMtYjYwMi03NDNlZTVhZDk1NmMiLCJncm91cHMiOlsiY2hhdC51c2VyIl19.Dmb8tzY6LgEOic1lUPDN1IT_j83-Ge5KzRzhu2Jmtd4',
  },
  {
    name: 'Terry User',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlcnJ5IFVzZXIiLCJpYXQiOjE1MTYyMzkwMjIsInBlcnNvbklkIjoiOTM4ZGQ5ZjUtMDVkZC00NWFhLWFkZDktNWViYWIwOGMyZDA3IiwiZ3JvdXBzIjpbImNoYXQudXNlciJdfQ.j1tDEJbpjx_s1zdyrawFBlESzGYjVDQ2kg6YaVDoYi0',
  },
  {
    name: 'Allen Anon',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFsbGVuIEFub255bW91cyIsImlhdCI6MTUxNjIzOTAyMiwicGVyc29uSWQiOiI2MDMzZTEwNC1lMjlmLTQ2NDktYjY4MS04MDBkYzc0ZjhhNTgiLCJncm91cHMiOltdfQ.5bF80f3zsphZ_pSyeafRn_Dc-huPI-kbujSDQjwYGm0',
  },
];
