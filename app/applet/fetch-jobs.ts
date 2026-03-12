async function fetchJobs() {
  const res = await fetch('https://api.github.com/repos/digitalurban/Aqua-Clock-/actions/runs/23013191887/jobs');
  const data = await res.json();
  console.log(JSON.stringify(data.jobs.map(j => ({
    name: j.name,
    status: j.status,
    conclusion: j.conclusion
  })), null, 2));
}
fetchJobs();
