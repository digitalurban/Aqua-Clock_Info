async function fetchRuns() {
  const res = await fetch('https://api.github.com/repos/digitalurban/Aqua-Clock-/actions/runs');
  const data = await res.json();
  const run = data.workflow_runs[0];
  console.log(JSON.stringify({
    id: run.id,
    status: run.status,
    conclusion: run.conclusion,
    name: run.name,
    head_commit_message: run.head_commit.message
  }, null, 2));
  
  const jobsRes = await fetch(run.jobs_url);
  const jobsData = await jobsRes.json();
  console.log(JSON.stringify(jobsData.jobs.map(j => ({
    name: j.name,
    status: j.status,
    conclusion: j.conclusion
  })), null, 2));
}
fetchRuns();
