from rest_framework import viewsets
from home.models import Rohit,Vgdhf,Cvbcnfjfjfjgjhgj,Cvbcnfjfjfjgjhgj,Rohit,Vgdhf,Cvbcnfjfjfjgjhgj,Rohit,Vgdhf
from .serializers import RohitSerializer,VgdhfSerializer,CvbcnfjfjfjgjhgjSerializer,CvbcnfjfjfjgjhgjSerializer,RohitSerializer,VgdhfSerializer,CvbcnfjfjfjgjhgjSerializer,RohitSerializer,VgdhfSerializer
from rest_framework import authentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from home.api.v1.serializers import (
    SignupSerializer,
    UserSerializer,
)


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})

class RohitViewSet(viewsets.ModelViewSet):
    serializer_class = RohitSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Rohit.objects.all()

class VgdhfViewSet(viewsets.ModelViewSet):
    serializer_class = VgdhfSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Vgdhf.objects.all()

class CvbcnfjfjfjgjhgjViewSet(viewsets.ModelViewSet):
    serializer_class = CvbcnfjfjfjgjhgjSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Cvbcnfjfjfjgjhgj.objects.all()
