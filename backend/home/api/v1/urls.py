from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import RohitViewSet,VgdhfViewSet,CvbcnfjfjfjgjhgjViewSet,CvbcnfjfjfjgjhgjViewSet,RohitViewSet,VgdhfViewSet,CvbcnfjfjfjgjhgjViewSet,RohitViewSet,VgdhfViewSet,CvbcnfjfjfjgjhgjViewSet,RohitViewSet,VgdhfViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('rohit', RohitViewSet )
router.register('vgdhf', VgdhfViewSet )
router.register('cvbcnfjfjfjgjhgj', CvbcnfjfjfjgjhgjViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
