function showIndex(req, res) {
  res.render('index', { session: req.session });
}

function showAdminDashboard(req, res) {
  res.render('adminDashboard', { session: req.session });
}

module.exports = { showIndex, showAdminDashboard };
