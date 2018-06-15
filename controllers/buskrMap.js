/**
 * GET /
 * Buskrhomepage page.
 */
exports.buskerMap = (req, res) => {
    res.render('map', {
      title: 'map',
      full_title: 'See locations of buskers'
    });
  };
  