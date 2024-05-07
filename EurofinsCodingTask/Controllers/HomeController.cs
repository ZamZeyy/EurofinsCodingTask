/*////////////////////////////////////////////////////////////////////////////////
this file contains the controller for the home page of the application.
It contains the logic for saving the numbers entered by the user to the database.
Mateusz Judka
*/////////////////////////////////////////////////////////////////////////////////


using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using EurofinsCodingTask.Models;
using System;

namespace EurofinsCodingTask.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly NumberContext _context; // Add the context for database operations

        // Modify the constructor to inject the database context
        public HomeController(ILogger<HomeController> logger, NumberContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        // POST: Home/SaveNumbers
        [HttpPost]
        public IActionResult SaveNumbers(String customValue1, String customValue100)
        {
            NumberEntry newEntry = new NumberEntry
            {
                FirstNumber = customValue1,
                LastNumber = customValue100,
                DateUpdated = DateTime.Now
            };

            _context.NumberEntries.Add(newEntry);
            _context.SaveChanges(); // Save the changes to the database

           

            return RedirectToAction("Index");
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
