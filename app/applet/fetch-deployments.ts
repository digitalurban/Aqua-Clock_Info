async function fetchDeployments() {
  const res = await fetch('https://api.github.com/repos/digitalurban/Aqua-Clock-/deployments');
  const data = await res.json();
  console.log(JSON.stringify(data.slice(0, 2).map(r => ({
    id: r.id,
    environment: r.environment,
    created_at: r.created_at,
    updated_at: r.updated_at
  })), null, 2));
}
fetchDeployments();
