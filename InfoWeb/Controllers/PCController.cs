using InfoWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace InfoWeb.Controllers
{
    public class PCController : Controller
    {
        //GET PC/GETPC
        public JsonResult GetPC()
        {
            using (var db = new PCEntities())
            {
                List<PC> listarPC = db.PC.ToList();
                return Json(listarPC, JsonRequestBehavior.AllowGet);
            }
        }
    }
}