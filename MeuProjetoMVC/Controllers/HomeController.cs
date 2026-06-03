using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MeuProjetoMVC.Models;

namespace MeuProjetoMVC.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Cadastrar(UsuarioViewModel model)
    {
        if (string.IsNullOrEmpty(model.Nome) || !model.Email.Contains("@") || model.Idade <= 0)
        {
            return Content("Dados inválidos detectados pelo Servidor C#.");
        }

        return Content($"Sucesso! O servidor ASP.NET recebeu os dados de {model.Nome} ({model.Email}) de forma segura.");
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return Models.ErrorViewModel.Create(_logger);
    } 
} 