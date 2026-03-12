async function fetchRuns() {
  const res = await fetch('https://api.github.com/repos/digitalurban/Aqua-Clock-/actions/runs');
  const data = await res.json();
  console.log(JSON.stringify(data.workflow_runs.slice(0, 2).map(r => ({
    id: r.id,
    status: r.status,
    conclusion: r.conclusion,
    name: r.name,
    head_commit_message: r.head_commit.message
  })), null, 2));
}
fetchRuns();
