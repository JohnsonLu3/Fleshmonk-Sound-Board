using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace FleshmonkSoundBoardWebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class SoundBoardController : ControllerBase
    {
        private readonly ILogger<SoundBoardController> _logger;

        public SoundBoardController(ILogger<SoundBoardController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public string[] Get()
        {
            string[] files = Directory.GetFiles("../SoundClips/");
            for(int i = 0; i < files.Length; i++) {
                String filename = files[i];
                String[] tokens = filename.Split("/");
                filename = tokens[tokens.Length - 1];
                tokens = filename.Split(".");
                filename = tokens[0];
                files[i] = filename;
            }
            return files;
        }
    }
}