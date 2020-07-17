from django.shortcuts import render


def Index(request):
    return render(request, 'index.html')


def Button(request):
    return render(request, 'button.html')
