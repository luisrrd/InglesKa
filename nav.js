// ══════════════════════════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════════════════════════
function showPanel(id) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  document.getElementById('panel-'+id).classList.add('active');
  document.getElementById('nav-'+id).classList.add('active');
  const titles = { quiz:'Tenses Quiz', adj:'Adjectives', ani:"Animals", prof:"Professions", sports:"Sports", body:"Body Parts", school:"School", tech:"Technology", food:"Food", fruit:"Fruits", vegetables:"Vegetables", fast:"Fast Food", drink:"Beverages", irrverbs:"Irregular Verbs", regverbs:"Regular Verbs" };
  document.getElementById('topbar-title').textContent = titles[id] || '';
  document.getElementById('score-pills').style.display = (id === 'quiz') ? 'flex' : 'none';
  if(window.innerWidth <= 700) closeSidebar();
}
function toggleSidebar(){
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('open');
}
function closeSidebar(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}

// ══════════════════════════════════════════════════════════════
