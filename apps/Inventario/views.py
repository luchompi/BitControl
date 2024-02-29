from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Marca
from .serializers import MarcaSerializer


class MarcaController(APIView):
    def get_marcas(self):
        return Marca.objects.all()

    def get_single_marca(self, pk):
        return get_object_or_404(Marca, pk=pk)

    def get(self, request, format=None, pk=None):
        if pk:
            marca = self.get_single_marca(pk)
            serializer = MarcaSerializer(marca)
        else:
            marcas = self.get_marcas()
            serializer = MarcaSerializer(marcas, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = MarcaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk, format=None):
        marca = self.get_single_marca(pk)
        serializer = MarcaSerializer(marca, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        marca = self.get_single_marca(pk)
        marca.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


